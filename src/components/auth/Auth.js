/* eslint-disable no-unused-vars */
import firebase from 'firebase/app';
import "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { firebaseConfig } from './FirebaseConfig';


// initialize firebase

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

// google provider
const provider  = new firebase.auth.GoogleAuthProvider();

// create auth context
const authContext = createContext();

// auth provider component
export function ProvideAuth({children}){
  const auth = useProvidedAuth();
  return <authContext.Provider value={auth}>
    { children }
  </authContext.Provider>
}

export const useAuth = () => useContext(authContext);

// use providedAuth function
// provider hook that creates auth objext and
// handles state

function useProvidedAuth() {

  const [user, setUser] = useState({
      isSignedIn: false,
      name: '',
      email: '',
      password: '',
      photoURL: ''
  });
  const [loginStatus, setLoginStatus] = useState({
    status: "idle",
    error: null
  });

  const formatUser = {
    name: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
    isSignedIn: user.isSignedIn
  }
  const [error, setError] = useState('');

  // signinwithpopup 

  const signInWithPopUp = async () => {
      try {
          const response = await firebase.auth()
          .signInWithPopup(provider);

          // console.log(response);
          const {displayName, photoURL, email} = response.user;
          const signedInUser = {
              isSignedIn: true,
              name: displayName,
              email: email,
              photoURL: photoURL
          };
          setUser(signedInUser);
          setLoginStatus({status: "resolved", error: null});
          return user;
      } catch(err){
          // handle errors here 
          const errorCode = err.code;
          const errorMessage = err.message;
          setError(errorCode, errorMessage);
      }
  }


  // signout
const signout = () => {
  return firebase
    .auth()
    .signOut()
    .then(() => {
      setUser(false);
    });
};

// get user on mount

useEffect(() => {
  const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(false);
    }
  });
  // Cleanup subscription on unmount
  return () => unsubscribe();
}, []);

// return the user object and auth methods
return {
  user,
  signInWithPopUp,
  signout,
  formatUser
};

}
