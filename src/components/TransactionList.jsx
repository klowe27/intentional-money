import React from 'react';
import TransactionItem from './TransactionItem';
import { sampleTransactions } from './assets/sample-content.js';
import { v4 } from 'uuid';

function TransactionList(){
  return(
    <div>
      {sampleTransactions.map((transaction) =>
        <TransactionItem
          date={transaction.date}
          vendor={transaction.vendor}
          note={transaction.note}
          amount={transaction.amount}
          category={transaction.category}
          account={transaction.account}
          cleared={transaction.cleared}
          key={v4()}/>
      )}
    </div>
  );
}

export default TransactionList;