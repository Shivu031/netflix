import './app.scss';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import Login from './pages/login/Login';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

function App() {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={user ? <Home/> : <Navigate to="/register"/>}></Route>
        <Route exact path='/register' element={!user ? <Register/> : <Navigate to="/"/>}></Route>
        <Route exact path='/login' element={!user ? <Login/> : <Navigate to="/"/>}></Route>
        {user && (
          <>
            <Route exact path='/movies' element={<Home type="movies"/>}></Route>
            <Route exact path='/series' element={<Home type="series"/>}></Route>
            <Route exact path='/watch' element={<Watch/>}></Route>
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
