import React from 'react';
import PostData from './postdemoapi';
// import DemoApi from './getdemoapi';
import DeleteData from './deletedemoapi';
import './crud.css';


function Crud() {
     return (
      <div className='crud'>
        <PostData/>
        {/* <DemoApi/> */}
        <DeleteData/>
      </div>
    );
  }
  
  export default Crud;