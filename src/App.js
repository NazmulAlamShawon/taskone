

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Clints from './pages/Clints';

function App() {
  return (
    <div className="App">
       <Routes>
          <Route path='/' element={<Clints></Clints>}></Route>
      
          
        </Routes> 
    </div>
  );
}

export default App;
