import { createContext, useContext,useEffect,useState } from "react";
import { createUserWithEmailAndPassword, 
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged,
        GoogleAuthProvider,
        signInWithPopup,
        FacebookAuthProvider,
        signInWithRedirect,
        GithubAuthProvider
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

    function googleSignUp() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider)
    }

    function signInWithFacebook() {
        const facebookAuthProvider = new FacebookAuthProvider();
        return signInWithPopup(auth,facebookAuthProvider);
    }

    function singUpWithFacebook() {
        const facebookAuthProvider = new FacebookAuthProvider();
        return signInWithPopup(auth,facebookAuthProvider).then((re) =>{
            console.log(re);
        }).catch((err) => {
            console.log(err.message);   
        })
    }

    function githubSignUp() {
        const gitAuthProvider = new GithubAuthProvider();
        return signInWithPopup(auth, gitAuthProvider);
    }

    function githubSignIn() {
        const gitAuthProvider = new GithubAuthProvider();
        return signInWithPopup(auth, gitAuthProvider);
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
        <userAuthContext.Provider 
        value={{
            signUp,user,logIn ,logOut,googleSignIn, googleSignUp,signInWithFacebook,
            singUpWithFacebook, githubSignUp , githubSignIn
            }}>
        {children}</userAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext);
}