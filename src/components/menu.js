import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="./components/crud.js">Crud</Link>
        </li>
        <li>
          <Link to="./components/tabledata.js">Table</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;
