import React, { useState} from 'react';
import axios from 'axios';

const DemoApi= () => {
    const [demoapi, setDemoApi] = useState([]);

   const getData=() => {
        axios.get('http://localhost:25403/api/GetDemoApi')
        .then(response => setDemoApi(response.data))
        .catch(error => console.error(error));
    
    };

    return (
        <div>

            <button onClick={() => getData()}>Get Data</button>
            <ul>
                {demoapi.map(demoItem => (
                    <li key={demoItem.id}>
                        {demoItem.name} - {demoItem.age}
                    </li>
                ))}
            </ul>
           
        </div>
    );
};

export default DemoApi;
