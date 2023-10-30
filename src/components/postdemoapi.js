import React, { useState } from 'react';
import axios from 'axios';

const PostData = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handlePost = () => {
    const newData = { id, name, age };
    axios
      .post('http://localhost:25403/api/PostDemoApi', newData)
      .then(response => {
        console.log('Data updated successfully:', response.data);

      })
      .catch(error => {
        console.error('Error updating data:', error);

      });
  };

  const handleUpdate=()=> {
    const updateData = { id, name, age };
    axios
      .put('http://localhost:25403/api/UpdateDemoApi', updateData)
      .then(response => {
        console.log('Data updated successfully:', response.data);

      })
      .catch(error => {
        console.error('Error updating data:', error);

      });
  };


  return (
    <div>
      <h2>Enter Details</h2>
      <div>
        <label>ID:</label>
        <input type="text" value={id} onChange={e => setId(e.target.value)} />
      </div>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label>Age:</label>
        <input type="text" value={age} onChange={e => setAge(e.target.value)} />
      </div>
      <button onClick={handlePost}>Submit</button>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default PostData;
