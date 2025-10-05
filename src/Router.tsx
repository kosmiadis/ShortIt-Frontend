import { createBrowserRouter } from "react-router-dom";
import CoreLayout from "@components/layouts/CoreLayout.tsx";
import Home from "@components/pages/Home/Home";
import DashboardLayout from "@components/layouts/DashboardLayout";
import Overview from "@components/pages/Dashboard/Overview/Overview";
import Links from "@components/pages/Dashboard/Links/Links";
import Analytics from "@components/pages/Dashboard/Analytics";
import Settings from "@components/pages/Dashboard/Settings";
import Subscription from "@components/pages/Dashboard/Subscription";
import AuthLayout from "@components/layouts/AuthLayout";
import Login from "@components/pages/Auth/Login";
import { paths } from "@config/paths";
import Register from "@components/pages/Auth/Register";
import PageNotFound from "@components/pages/Error/PageNotFound";
import Link from "@components/pages/Dashboard/Links/Link";
import ProtectedRoute from "@components/layout/ProtectedRoute";

export const Router = createBrowserRouter([
    { path: paths.app.root.getHref(), element: <CoreLayout />, children: [
        { index: true, element: <Home />},
        { path: paths.app.dashboard.getHref(), element: <ProtectedRoute><DashboardLayout /></ProtectedRoute>, children: [
            { index: true, element: <Overview /> },
            { path: paths.app.links.getHref(), element: <Links />},
            { path: paths.app.link.getHref(), element: <Link />},
            { path: paths.app.analytics.getHref(), element: <Analytics /> },
            { path: paths.app.subscription.getHref(), element: <Subscription />},
            { path: paths.app.settings.getHref(), element: <Settings />},
        ]},
        { path: paths.auth.root.getHref(), element: <AuthLayout />, children: [
            {path: paths.auth.login.getHref(), element: <Login />},
            {path: paths.auth.register.getHref(), element: <Register />},
        ]}
    ]},
    { path: '*', element: <PageNotFound /> }
])