import React, { useContext } from 'react'

import { TransactionState } from '../context'

const Balance = () => {
  const { transactions } = useContext(TransactionState)

  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <section style={{ marginBottom: 50 }}>
      <p>YOUR BALANCE</p>
      <h3 className="is-size-4">${total}</h3>
    </section>
  )
}

export default Balance
