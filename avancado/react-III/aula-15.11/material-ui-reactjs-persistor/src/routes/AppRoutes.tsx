import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from '../pages/Products';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PrivateRoute from '../components/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    )
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/products',
    element: (
      <PrivateRoute>
        <Products />
      </PrivateRoute>
    )
  }
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
