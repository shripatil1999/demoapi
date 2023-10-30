import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteDataDropdown = () => {
  const [data, setData] = useState([]);
  const [id, setSelectedId] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint to fetch the data.
    axios.get('http://localhost:25403/api/GetDemoApi')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  const handleDelete = () => {
    if (id) {
      // Replace 'YOUR_DELETE_API_ENDPOINT' with your actual API endpoint to delete the data using the selected ID.
      axios.delete(`http://localhost:25403/api/DeleteDemoApi/${id}`)
        .then(response => {
          console.log('Data deleted successfully:', response.data);
          // Handle success - you may display a success message or update the UI accordingly.
        })
        .catch(error => {
          console.error('Error deleting data:', error);
          // Handle error - you may display an error message or perform error handling.
        });
    }
  };


  return (
    <div>
      <h2>Delete Data</h2>
      <select value={id} onChange={(e) => setSelectedId(e.target.value)}>
        <option value="">Select an ID</option>
        {data.map(item => (
          <option key={item.id} value={item.id}>
            {item.id}
          </option>
        ))}
      </select>
      <button onClick={handleDelete}>Delete Data</button>
    </div>
  );
};

export default DeleteDataDropdown;