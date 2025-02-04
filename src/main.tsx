import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoute } from './constant.ts';
import MainPage from './pages/MainPage/MainPage.tsx';
import AuthPage from './pages/AuthPage/AuthPage.tsx';

const router = createBrowserRouter([
  {
    path: AppRoute.Main,
    element: false ? <MainPage /> : <AuthPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
