import { createContext, useContext, useEffect, useState } from 'react';

import {
    createUserWithEmailAndPassword,
    singInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
} from 'firebase/auth';

import { auth } from "../firebase";

const authContext = createContext();

export const useAuth = () => {
    const context = userContext(authContext);
    if (!context) throw new Error('There is no auth provider');
    return context;
};

export function AuthProvider ({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

   const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
   } ;
}

