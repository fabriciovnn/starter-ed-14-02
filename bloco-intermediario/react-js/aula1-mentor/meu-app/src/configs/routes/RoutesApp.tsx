import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import Contato from "../../pages/Contato";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/contato',
    element: <Contato />,
  }
])

function RoutesApp() {
  return (
    <RouterProvider router={router}/>
  )
}

export default RoutesApp;