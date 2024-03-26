import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Pages/Home';
import ListedBooks from './components/Pages/ListedBooks';
import PagetoRead from './components/Pages/PagetoRead';
import ContactUs from './components/Pages/ContactUs';
import Faq from './components/Pages/Faq';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/Books.json')
      },
      {
        path: '/ListedBooks',
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: '/PagetoRead',
        element: <PagetoRead></PagetoRead>,
      },
      {
        path: '/faq',
        element: <Faq></Faq>,
      },
      {
        path: '/contact',
        element: <ContactUs></ContactUs>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
