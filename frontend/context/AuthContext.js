import { useContext } from 'react';
import ContextProvider from './ContextProvider'
import * as Google from "expo-google-app-auth";
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential, signOut } from 'firebase/auth';
import { auth } from '../firebase';

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }

}

const config = {
    androidClientId: process.env.ANDROID_CLIENT_ID,
    iosClientId: process.env.IOS_CLIENT_ID,
    scopes: ["profile", "email"],
    persmissions: ["public_profile", "email", "gender", "location"]
}

const signInWithGoogle = async () => {
    try {
        const { type, accessToken, idToken } = await Google.logInAsync(config);
        if (type === "success") {
            const credential = GoogleAuthProvider.credential(idToken, accessToken);
            await signInWithCredential(auth, credential);
        }
    } catch (err) {
        console.log(err)
    }
}

onAuthStateChanged(auth, (user) => {
    if(user){
        
    }
})

const { Context, Provider } = ContextProvider(authReducer, { signInWithGoogle }, { user: null });

export const AuthProvider = Provider;
export default function useAuth() { return useContext(Context) };