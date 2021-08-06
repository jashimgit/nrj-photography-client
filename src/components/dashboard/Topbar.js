import React from 'react';
import { useAuth } from '../auth/Auth';

export default function Topbar() {

    const auth = useAuth();
    const loggedInUser = auth.formatUser;
    return (
        <div>
            <div className="d-flex justify-content-between py-2">
              

                {loggedInUser.email ? (
                    <>
                        <p className="text-primary">{loggedInUser.name}</p>
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => loggedInUser.signout()}
                        >
                            Sign Out
                        </button>
                    </>
                ) : (
                    <h3 className="text-primary">User Name</h3>
                )}
            </div>
        </div>
    )
}
