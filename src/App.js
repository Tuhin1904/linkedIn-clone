import Login from './Components/Login';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path='/home' 
          element={<><Header/><Home/></>}/>
      </Routes>
    </>
  );
}

export default App;
