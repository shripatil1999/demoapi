import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './components/crud';
import { useState } from 'react';
import TableData from './components/tabledata';
// import Button from 'react-bootstrap/Button';

function App() {
  const [showComponent, setShowComponent] = useState(false);
  const handleCrud = () => {
    setShowComponent(prevState => !prevState); // Toggle the value of showComponent
  }


  return (
    <div className="App">
      <h1>Welcome to My App</h1>

      <button onClick={handleCrud}> {showComponent ? 'Hide Component' : 'Load Component'}</button>
      {showComponent && <Crud />}
      <TableData />
    </div>
  );
}

export default App;

