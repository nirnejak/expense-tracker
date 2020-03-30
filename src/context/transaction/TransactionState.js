import React, { createContext, useReducer } from 'react'

import TransactionReducer from './TransactionReducer'

// Initial State
const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
  ]
}

// Create context
export const TransactionState = createContext(initialState)

// Provider component
export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TransactionReducer, initialState);

  // Actions
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
    })
  }

  return (
    <TransactionState.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </TransactionState.Provider>
  )
}