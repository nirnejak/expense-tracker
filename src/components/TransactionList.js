import React, { useContext } from 'react'

import { TransactionState } from '../context'

import Transaction from './Transaction'

/**
 * Component to show list of all the transactions
 * 
 * @component
 * @example
 * return (
 *  <TransactionList />
 * )
 */
const TransactionList = () => {
  const { transactions } = useContext(TransactionState)

  return (
    <section style={{ marginBottom: 50 }}>
      <h4 className="is-size-5 has-text-weight-bold">History</h4>
      <hr style={{ marginTop: 5 }} />
      <div className="list list-hoverable">
        {transactions.map((transaction, index) => <Transaction key={transaction.id} transaction={transaction} />)}
      </div>
    </section>
  )
}

export default TransactionList