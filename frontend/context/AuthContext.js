import { useContext } from 'react';
import ContextProvider from './ContextProvider'

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }

}

const { Context, Provider } = ContextProvider(authReducer, {}, {});

export const AuthProvider = Provider;
export default function useAuth() { return useContext(Context) };