import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import auth from "../../firebase/firebase";

export const Authcontext = createContext();
const Authprovider = ({children}) => {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const google = new GoogleAuthProvider();
    //social login
    const socialLogin = () => { 
        setIsLoading(true)
        return signInWithPopup(auth, google)
     }

    //create user with email and password
    const createUser = (email, password) => { 
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
     }

    //log in with email and pass
    const logInWithCedintial= (email, password) => { 
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
     }

    //sign out
    const logOut = () => { 
        setIsLoading(true)
        return signOut(auth)
     }

    useEffect(() => { 
        const unsubscribe = onAuthStateChanged(auth, (currenUser) => { 
            setIsLoading(true);
            setUser(currenUser);
            setIsLoading(false)
         })
         return () => { unsubscribe() };
     },[])


    const authInfo = {
        user,
        isLoading,
        socialLogin,
        createUser,
        logInWithCedintial,
        logOut,
    }
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;