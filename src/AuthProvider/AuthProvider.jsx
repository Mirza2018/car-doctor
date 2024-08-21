import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loadding, setLodding] = useState(true)


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLodding(false);

            if (currentUser && currentUser.email) {
                const loggedUser = { email: currentUser.email };
                fetch('https://car-doctor-server-mirza2018s-projects.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('jwt response', data);
                        localStorage.setItem('car-access-token', data.token)

                    })
            }
            else {

                localStorage.removeItem('car-access-token')
            }

        })
        return () => {
            unsubscribe();
        }
    }, [])

    const logOut = () => {
        setLodding(true)
        return signOut(auth);
    }

    const registerEmailPass = (email, password) => {
        setLodding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginEmailPass = (email, password) => {
        setLodding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googlePopup = () => {
        setLodding(true)
        return signInWithPopup(auth, provider)
    }

    const values = {
        user, logOut, registerEmailPass, loginEmailPass, googlePopup, loadding
    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;