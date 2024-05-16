import HomePage from '@App/pages/page.tsx';
import useIsSSR from '@hooks/useIsSSR.tsx';
import privateRoutesMap from '@router/private/config.ts';
import PrivateRoute from '@router/private/PrivateRoute.tsx';
import publicRoutesMap from '@router/public/config.ts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const MainRouters = () => {
  const isSSR = useIsSSR();
  if (isSSR) {
    return <HomePage />;
  }
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutesMap?.map((route) => (
          <Route key={route.link} path={route.link} element={<route.Element />} />
        ))}
        {privateRoutesMap?.map((route) => (
          <Route key={route.link} path={route.link} element={<PrivateRoute auth={{ isAuthenticated: true }}>
            <route.Element />
          </PrivateRoute>} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
