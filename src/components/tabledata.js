import React, { useState} from 'react';
import axios from 'axios';
import './tabledata.css';

const TableData = () => {

    const [demoapi, setDemoApi] = useState([]);

   const getData=() => {
        axios.get('http://localhost:25403/api/GetDemoApi')
        .then(response => setDemoApi(response.data))
        .catch(error => console.error(error));
    
    };

    return (
        <div className='tabledata'>

        <table onLoad={getData()}>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
            </tr>

            {demoapi.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.age}</td>
                        </tr>
                    )
                })}
        </table>

        </div>
    );
}
export default TableData;
