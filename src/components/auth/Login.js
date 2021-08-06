/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useAuth } from './Auth';


export default function Login() {
    const [loggedInUser, setLoggedInUser] = useState(false);

    const auth = useAuth()
    const history = useHistory();
    const location = useLocation();
    const {from} = location.state || {from: {pathname: '/dashboard'}};
    
    /**
     *  create a new user if login 
     *  for first time with user google
     *  account 
     *   code will be here 
     */
    
    
    
    
    
    // handle google sign in
    const handleGoogleSignIn = () => {
        auth.signInWithPopUp()
        .then(res => {
            handleRespose(res, true);
        });
    }

    const handleRespose = (res, redirect) => {
        setLoggedInUser(res);
        if(redirect) {
            history.replace(from);
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="d-flex login">
                    <h2 className="display-4 mb-5">Login</h2>
                    <button
                        className="btn btn-danger"
                        type="button"
                        onClick={handleGoogleSignIn}
                    >

                        Sign in with Google
                    </button>
                </div>
            </div>
            
        </div>
    )
}
