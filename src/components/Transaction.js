import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

const deleteButtonStyle = { marginRight: 10, marginTop: 2 }

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext)

  const sign = transaction.amount < 0 ? '-' : '+'

  return (
    <span className="list-item">
      <button
        className="delete"
        style={deleteButtonStyle}
        onClick={() => deleteTransaction(transaction.id)}
      />
      <span>{transaction.text}</span>
      <span className={
        sign === '-' ?
          'has-text-danger is-pulled-right' :
          'has-text-success is-pulled-right'
      }>
        {sign}${Math.abs(transaction.amount)}
      </span>
    </span>
  )
}

export default Transaction
