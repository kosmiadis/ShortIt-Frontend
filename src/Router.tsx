import { createBrowserRouter } from "react-router-dom";
import CoreLayout from "@components/layouts/CoreLayout.tsx";
import Home from "@components/pages/Home/Home";
import DashboardLayout from "@components/layouts/DashboardLayout";
import Overview from "@components/pages/Dashboard/Overview";
import Links from "@components/pages/Dashboard/Links";
import Analytics from "@components/pages/Dashboard/Analytics";
import Settings from "@components/pages/Dashboard/Settings";
import Subscription from "@components/pages/Dashboard/Subscription";
import AuthLayout from "@components/layouts/AuthLayout";
import Login from "@components/pages/Auth/Login";
import Signup from "@components/pages/Auth/Signup";

export const Router = createBrowserRouter([
    { path: '/', element: <CoreLayout />, children: [
        {index: true, element: <Home />},
        {path: 'dashboard', element: <DashboardLayout />, children: [
            { index: true, element: <Overview /> },
            { path: 'links', element: <Links />},
            { path: 'analytics', element: <Analytics /> },
            { path: 'subscription', element: <Subscription />},
            { path: 'settings', element: <Settings />},

        ]},
        { path: 'auth', element: <AuthLayout />, children: [
            {path: 'login', element: <Login />},
            {path: 'signup', element: <Signup />},
        ]}
    ]}
])