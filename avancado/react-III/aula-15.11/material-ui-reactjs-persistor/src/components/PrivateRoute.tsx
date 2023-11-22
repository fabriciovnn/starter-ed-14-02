import React, { useEffect } from 'react';
import { useAppSelector } from '../store/hooks';
import { useNavigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const userRedux = useAppSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (userRedux.id === '') {
      navigate('/login');
    }
  }, [userRedux]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default PrivateRoute;
