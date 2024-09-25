import React, { useEffect, useState } from "react";
import styles from "./table.module.css";
import axios from "axios";
import Deleteuser from '../Delete/Deleteuser';
import { MdDeleteSweep } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Updateuser from "../Update/Updateuser";

function Usertable({ clearData }) {
  const [tableData, setTableData] = useState([]);
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);
  const [userToUpdate, setUserToUpdate] = useState(null); 
  const [searchTerm, setSearchTerm] = useState("");

  const handleTableData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/getuser");
      setTableData(response.data.result);
    } catch (error) {
      console.error("Error fetching data");
    }
  };

  useEffect(() => {
    handleTableData();
  }, []);

  const handleSearch = async () => {
    if (searchTerm.trim()) {
      try {
        const url = `http://localhost:4000/api/users?searchTerm=${searchTerm}`;
        const response = await axios.get(url);
        
        if (response.data.length === 0) {
          setTableData([{
            id: "",
            name: "User not found!",
            email: "----"
          }]);
        } else {
          setTableData(response.data);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      handleTableData(); // Fetch all users if search term is empty
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    handleTableData(); // Fetch all users
    clearData(); // Call clearData from props
  };

  return (
    <>
      <div className={styles.tableContainer}>
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
          />
          <button onClick={handleSearch}>Search</button>
          <button onClick={handleClear} className='btn btn-danger'>Clear</button>
        </div>
        <table className={styles.customTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={() => {
                      setUserToDelete(item);
                      setIsModalOpenDelete(true);
                    }}
                  >
                    <MdDeleteSweep />
                  </button>
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                      setUserToUpdate(item);
                      setIsModalOpenAdd(true);
                    }} 
                  >
                    <FaRegEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isModalOpenDelete && (
          <div className="modal-overlay" onClick={() => setIsModalOpenDelete(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={() => setIsModalOpenDelete(false)}>✖</button>
              {userToDelete && (
                <Deleteuser
                  user={userToDelete}
                  deleteSuccess={(deletedId) => {
                    setTableData((prevData) => prevData.filter(item => item.id !== deletedId));
                    setIsModalOpenDelete(false);
                  }}
                  closeModal={() => setIsModalOpenDelete(false)}
                />
              )}
            </div>
          </div>
        )}

        {isModalOpenAdd && userToUpdate && (
          <div className="modal-overlay" onClick={() => setIsModalOpenAdd(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={() => setIsModalOpenAdd(false)}>✖</button>
              <Updateuser dableValues={userToUpdate} closeModal={() => setIsModalOpenAdd(false)} refreshData={handleTableData} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Usertable;
