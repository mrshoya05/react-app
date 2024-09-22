import './App.css';
import axios from 'axios';
import Tabledata from './components/Tabledata';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState(''); // Use an empty string for the initial search value
  const [userData, setData] = useState([]);

  const handleGetuser = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/getdata");
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const filterValues = async () => {
    try {
      const res = await axios.post(`http://localhost:4000/api/filter-users`, {
        searchTerm: search // Sending the search term in the request body
      });
      setData(res.data);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <>
      <header>
        <span>MyApp</span>
        <nav>
          <ul>
            <li>
              <button onClick={handleGetuser}>GET USERS!</button>
            </li>
            <li>
              <input
                type='text' // Corrected from 'text' to 'type'
                placeholder='search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button onClick={filterValues}>FILTER USERS</button>
            </li>
            <li>
              <button>ADD USERS</button>
            </li>
          </ul>
        </nav>
      </header>
      <Tabledata tabledata={userData} />
    </>
  );
}

export default App;
