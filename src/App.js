import './app.scss';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import Login from './pages/login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/movies' element={<Home type="movies"/>}></Route>
        <Route exact path='/series' element={<Home type="series"/>}></Route>
        <Route exact path='/watch' element={<Watch/>}></Route>
        <Route exact path='/register' element={<Register/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
