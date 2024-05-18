import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Home, Login, Signup, Phonebook } from 'views';
const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Home></Home>
      </>
    ),
  },
  {
    path: '/login',
    element: (
      <>
        <Login></Login>
      </>
    ),
  },
  {
    path: '/signup',
    element: (
      <>
        <Signup></Signup>
      </>
    ),
  },
  {
    path: '/phonebook',
    element: (
      <>
        <Phonebook></Phonebook>
      </>
    ),
  },
  {
    path: '*',
    element: <Navigate to={'/'} />,
  },
]);

export default routes;
