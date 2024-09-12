import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext'; 

const ProtectedRoute = ({ element }) => {
  const { token } = useUser(); 

  return token ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;

