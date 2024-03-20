import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Router';
import GlobalStatemanagment from './provider/GlobalStatemanagment';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStatemanagment>
      <RouterProvider router={router} />
    </GlobalStatemanagment>
  </React.StrictMode>,
)
