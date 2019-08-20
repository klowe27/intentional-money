import React from 'react';
import './assets/styles/About.css';

function About() {
  return(
    <div className='about-container'>
      <h1>Get Started</h1>
      <div className='step'>1</div>
      <h2>Login</h2>
      <p>Login with your Google account so your budget is tied to you.</p>
      <div className='step'>2</div>
      <h2>Add Accounts</h2>
      <p>Add your current accounts (checking, savings, credit cards) along with the current balance. As you add transactions, you'll select the account they're associated with and your accounts will reflect the new balance. </p>
      <div className='step'>3</div>
      <h2>Create your Budget</h2>
      <p>Add categories for all of your spending (e.g. rent, groceries, gas) and choose the amount you'd like to budget for each category. Make sure your total budgeted for the month doesn't exceed your income. As you add transactions, you'll selected a category and your expenses for each category will be tracked.</p>
      <div className='step'>4</div>
      <h2>Add Transactions</h2>
      <p>Any time you spend money, add the transaction so your budget and accounts stay up to date.</p>
      <div className='step'>5</div>
      <h2>Keep things Reconciled</h2>
      <p>Periodically (weekly or monthly) compare your acccount balances in Intentional Money with those in your existing accounts to make sure they match. This ensures you're capturing all of your transactions and your budget accurately reflects your spending.</p>
    </div>
  )
}

export default About;
