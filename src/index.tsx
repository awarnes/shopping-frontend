import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import 'semantic-ui-css/semantic.min.css';

import AuthLayout from './routes/AuthLayout';
import Root from './routes/Root';
import UserRoute from './routes/UserRoute';
import ErrorPage from './routes/ErrorPage';
import ShoppingListTab from './containers/ShoppingListTab';
import ProductListTab from './containers/ProductListTab';
import SettingsTab from './containers/SettingsTab';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Root />,
        path: '/'
      },
      {
        path: '/user/:userId/',
        element: <UserRoute />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: 'shopping',
            element: <ShoppingListTab />
          },
          {
            path: 'products',
            element: <ProductListTab />
          },
          {
            path: 'settings',
            element: <SettingsTab />
          }
        ]
      }
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
