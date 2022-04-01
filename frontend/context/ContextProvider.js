import React, { useReducer, createContext } from 'react'


export default (reducer, actions, initalState) => {
    const Context = createContext();

    const Provider = ({ children }) => {

        const [state, dispatch] = useReducer(reducer, initalState);
        const boundActions = Object.keys(actions).map(actionKey => actions[actionKey](dispatch))

        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider >
        )
    }

    return { Context, Provider }
}