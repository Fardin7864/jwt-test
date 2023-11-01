import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../providers/Authprovider/Authprovider";

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(Authcontext);
    const location = useLocation();
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.state} to='/login'></Navigate>
};

export default PrivetRoute;