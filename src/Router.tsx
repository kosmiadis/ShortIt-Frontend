import { createBrowserRouter } from "react-router-dom";
import CoreLayout from "@components/layouts/CoreLayout.tsx";
import Home from "@components/pages/Home/Home";

export const Router = createBrowserRouter([
    { path: '/', element: <CoreLayout />, children: [
        {index: true, element: <Home />}
    ]}
])