import { createBrowserRouter } from "react-router-dom";
import CoreLayout from "@components/layouts/CoreLayout.tsx";

export const Router = createBrowserRouter([
    { path: '/', element: <CoreLayout />, children: [
        {index: true, element: <div></div>}
    ]}
])