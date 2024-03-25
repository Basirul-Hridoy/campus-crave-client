import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Router';
import GlobalStatemanagment from './provider/GlobalStatemanagment';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from './provider/AuthProvider';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <GlobalStatemanagment>
          <RouterProvider router={router} />
          <Toaster />
        </GlobalStatemanagment>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
