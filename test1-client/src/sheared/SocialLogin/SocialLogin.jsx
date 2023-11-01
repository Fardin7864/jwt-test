import { useContext } from "react";
import { Authcontext } from "../../providers/Authprovider/Authprovider";

const SocialLogin = () => {
    const {socialLogin} = useContext(Authcontext);
    const handleLogin=() => { 
        socialLogin()
        .then(res => {console.log(res)})
        .catch(err => {console.log(err)})
     }
    return (
        <div className="w-full">
            <button onClick={handleLogin} className=" btn btn-primary w-full text-white">Google</button>
        </div>
    );
};

export default SocialLogin;