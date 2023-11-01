import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const Mainroute = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    }
])

export default Mainroute;