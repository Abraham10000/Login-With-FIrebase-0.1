import { createContext, useContext,useEffect,useState } from "react";
import { createUserWithEmailAndPassword, 
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged,
        GoogleAuthProvider,
        signInWithPopup
} from "firebase/auth";
import { auth } from "../Firebase";

const userAuthContext = createContext<any>(undefined!);

export function UserAuthContextProvider({children} : any) {
    const [user, setUser] = useState("");
    function signUp(email : string, password : string) {
        return createUserWithEmailAndPassword(auth,email , password)
    }

    function logIn(email : string, password : string) {
        return signInWithEmailAndPassword(auth,email , password)
    }

    function logOut() {
        signOut(auth);
    }

    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }

    useEffect(() =>{
      const unsubscribe =  onAuthStateChanged(auth,(currentUser : any) =>{
            setUser(currentUser);
        });
        return ()=> {
            unsubscribe();
        }
    }, [])

    return (
        <userAuthContext.Provider value={{signUp, user,logIn ,logOut,googleSignIn}}>{children}</userAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext);
}