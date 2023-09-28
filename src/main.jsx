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
import {Dashboard} from "./Pages/Dashboard/index.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element:
            <Layout>
                <Home />
            </Layout>,
    },
    {
        path: "/sign-in",
        element:
            <Layout>
                <Login />
            </Layout>,
    },
    {
        path: "/dashboard",
        element:
            <Layout>
                <Dashboard />
            </Layout>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
      <RouterProvider router={router} />
)
