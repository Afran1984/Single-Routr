import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Component/Home/Home.jsx';
import About from './Component/About/About.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Users from './Component/Users/Users.jsx';
import Address from './Component/Address/Address.jsx';
import Photos from './Component/Photos/Photos.jsx';
import Showphoto from './Component/Showphoto/Showphoto.jsx';
import ErrorHandeling from './Component/ErrorHandeling/ErrorHandeling.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorHandeling></ErrorHandeling>,
    children: [
      {
        path: '/about',
        element:<About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path:'/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <Address></Address>
      },
      {
        path: '/photos',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/photos'),
        element: <Photos></Photos>
      },
      {
        path: '/Photo/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/photos/${params.userId}`),
        element: <Showphoto></Showphoto>
      }

    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
