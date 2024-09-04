import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Create from './Create';
import Read from './Read';
import Update from './Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/read/:id' element={<Read />}></Route>
          <Route path='/update/:id' element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
