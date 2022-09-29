import logo from './logo.svg';
import './App.css';

import CompShowUsers from './users/ShowUsers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompCreateUser from './users/CreateUser';
import CompEditUser from './users/EditUser';
import CompShowAgenda from './agenda/ShowAgenda';
import CompEditContact from './agenda/EditAgenda';
import CompCreateContact from './agenda/CreateContact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowUsers/>}/>
          <Route path='/create' element={<CompCreateUser/>}/>
          <Route path='/edit/:id' element={<CompEditUser/>}/>
          <Route path='/showAgenda/:id' element={<CompShowAgenda/>}/>
          <Route path='/editContact/:id/:idUser' element={<CompEditContact/>}/>
          <Route path='/createContact/:id' element={<CompCreateContact/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
