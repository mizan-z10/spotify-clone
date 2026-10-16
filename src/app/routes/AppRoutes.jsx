import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayouts from '../layouts/AuthLayouts'
import LoginPage from '../../features/auth/ui/pages/LoginPage'
import RegisterPage from '../../features/auth/ui/pages/RegisterPage'
import DashboardLayouts from '../layouts/DashboardLayouts'
import Home from '../../features/dashboard/ui/pages/Home'

const AppRoutes = () => {

    let router = createBrowserRouter([

        {
            path: '/',
            element: <AuthLayouts />,
            children: [
                {
                    path: '/',
                    element: <LoginPage />
                },
                {
                    path: '/register',
                    element: <RegisterPage />
                }
            ]
        },

        {
            path: '/dashboard',
            element: <DashboardLayouts />,
            children: [
                {
                    path: '/dashboard',
                    element: <Home />
                }
            ]
        }

    ])

  return <RouterProvider router={router} />
}

export default AppRoutes
