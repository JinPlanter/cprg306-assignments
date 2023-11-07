"use client";

// import from utils folder
import { useUserAuth } from "./_utils/auth-context";
// "useUserAuth" is a custom hook that consumes the AuthContext

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    // handlers for sign in and sign out
    const handleSignIn = () => {
        gitHubSignIn();
    };

    const handleSignOut = () => {
        firebaseSignOut();
    };

    return (
        /*
        <div>
            <p>
                Welcome, {user.displayName} ({user.email})
            </p>
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
        */
        <div>
            <h1>Authentication Demo</h1>
            {!user && (
                <button onClick={handleSignIn}>Sign In with GitHub</button>
            )}
            {user && (
                <div>
                    <p>
                        Welcome, <strong>{user.displayName} ({user.email}</strong> )
                    </p>
                    <button onClick={handleSignOut}>Sign Out</button>
                </div>
            )}
        </div>
    );
}