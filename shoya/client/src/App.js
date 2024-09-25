import './App.css';
import { useState, useEffect } from 'react';
import AddUserForm from './components/Adduser/AddUserForm';
import Usertable from './components/Table/Usertable';
import Deleteuser from './components/Delete/Deleteuser';
import Updateuser from './components/Update/Updateuser';
import axios from 'axios';
import { toast } from 'react-toastify'; 

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpenDelete, setModalOpenDelete] = useState(false);
  const [isModalOpenUpdate, setModalOpenUpdate] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]); 
  const [userToDelete, setUserToDelete] = useState(null); 

  useEffect(() => {
    handleGetData(); 
  }, []);

  const handleGetData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/users");
      setData(response.data);
    } catch (error) {
      toast.error("Error fetching user data");
    }
  };

  const handleAddUserClick = () => {
    setModalOpen(true);
  };

  const handleDeleteUserClick = (user) => {
    setUserToDelete(user);
    setModalOpenDelete(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalOpenDelete(false);
    setModalOpenUpdate(false);
    setUserToDelete(null); 
  };

  const handleCleardata = (handleClear)=>{
    handleClear()
  }



  return (
    <>
      <header className="custom-nav">
        <nav className="navbar navbar-expand-lg px-4">
          <a className="navbar-brand nav-a" href="#">MyApp</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between mx-5" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link a-custom" href="#">Get User</a>
              </li>
              <li className="nav-item">
                <button className="nav-link a-custom btn" onClick={handleAddUserClick}>
                  Add User
                </button>
              </li>
            </ul>
            <div>
              <input
                type='text'
                className='w-50 p-2'
                placeholder='search'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.currentTarget.value)}
              />
              <button className='btn btn-primary mx-2'
              
             
              >Search</button> 
              <button
               onClick={handleCleardata}
              className='btn btn-danger'>Clear</button> 
            </div>
          </div>
        </nav>
      </header>

      <section>
        <Usertable  clearData={handleCleardata} data={data} deleteBtm={handleDeleteUserClick} />
        
        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal} aria-hidden={!isModalOpen}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeModal} aria-label="Close modal">✖</button>
              <AddUserForm />
            </div>
          </div>
        )}
        {isModalOpenDelete && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeModal}>✖</button>
              <Deleteuser user={userToDelete} closeModal={closeModal} refreshData={handleGetData} />
            </div>
          </div>
        )}
        {isModalOpenUpdate && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeModal}>✖</button>
              <Updateuser />
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default App;
