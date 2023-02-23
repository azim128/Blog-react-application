import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './components/dependent/AuthContext';
import Navbar from './components/dependent/Navbar';
import CreatePost from './components/Pages/CreatePost';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';



function App() {
  return (
    <AuthProvider>
    <Navbar/>
      <Routes>
        <Route path='/*' element={ <Home/> }/>
        <Route path='/createpost' element={ <CreatePost/> }/>
        <Route path='/login' element={ <Login/> }/>
      </Routes>
    </AuthProvider>
  );
}

export default App;
