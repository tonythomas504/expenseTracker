import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'


//Initial Stat
const initialState = {
    transactions: []
}

//Creating context 

export const GlobalContext = createContext(initialState);

//wrapping other components in a provide component
//provider provides our state and any actions to the components that it wrapped around
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions 
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction, addTransaction }}>
        {children}
    </GlobalContext.Provider>)
}