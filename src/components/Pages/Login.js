import { signInWithPopup } from 'firebase/auth';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth, provider } from '../confic/FirebaseConfic';
import { AuthContext } from '../dependent/AuthContext';
import '../styles/login.css';
const Login = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  let navigate = useNavigate();

  const signInGoogle = () => {
    signInWithPopup(Auth, provider).then(() => {
      localStorage.setItem('isAuth', true);
      setIsLoggedIn(true);
      navigate('/');
    });
  };

  return (
    <div className='container'>
      <div className='sign-in'>
        <p> Sign In With Google</p>
        <button className='sign-in-btn' onClick={signInGoogle}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
