import type PrivateRouteProps from '@router/interface/privateRouteProps.ts';
import { Navigate } from 'react-router-dom';
import React from 'react';

const PrivateRoute: React.FC<PrivateRouteProps> = ({ auth: { isAuthenticated }, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
