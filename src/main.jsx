import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Router';
import GlobalStatemanagment from './provider/GlobalStatemanagment';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStatemanagment>
        <RouterProvider router={router} />
      </GlobalStatemanagment>
    </QueryClientProvider>
  </React.StrictMode>,
)
