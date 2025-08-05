import { useEffect } from 'react';
import RouterApp from './routes/RouterApp';
import { useAuth } from './api/auth';
import { useDispatch } from 'react-redux';
import { setAuth } from './redux/auth/authSlice';
import { useNavigate } from 'react-router';

const App = () => {
  // Redux dispatcher
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchAuth = async () => {
    try {
      const data = await useAuth();
      dispatch(setAuth(data));
    } catch (error: any) {
      navigate('/');
    }
  };

  useEffect(() => {
    fetchAuth();
  }, []);

  return (
    <>
      <RouterApp />
    </>
  );
};

export default App;
