import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { TransactionState } from '../context'

const deleteButtonStyle = { marginRight: 10, marginTop: 2 }

/**
 * Component to show a transaction
 * 
 * @component
 * @example
 * return (
 *  <Transaction />
 * )
 */
const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(TransactionState)

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

Transaction.propTypes = {
  /**
   * An object representing a transaction
   */
  transaction: PropTypes.object.isRequired
}

export default Transaction
