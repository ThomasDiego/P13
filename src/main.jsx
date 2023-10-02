import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './global.css'

import Layout from "./Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import {Profile} from "./Pages/Profile";

//adding Redux
import { store } from './store'
import { Provider } from 'react-redux'
import {ProtectedRoute} from "./features/ProtectedRoute";
import {UnprotectedRoute} from "./features/UnprotectedRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element:
            <Layout>
                <Home />
            </Layout>,
    },
    {
        path: "/login",
        element:
        <UnprotectedRoute>
            <Layout>
                <Login />
            </Layout>
        </UnprotectedRoute>,
    },
    {
        path: "/profile",
        element:
        <ProtectedRoute>
            <Layout>
                <Profile />
            </Layout>
        </ProtectedRoute>
        ,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
)
