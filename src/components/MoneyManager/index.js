import {Component} from 'react'
import MoneyDetails from '../MoneyDetails'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyMangager extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="main-container">
          <div className="name-con">
            <h1 className="name">Hi, Richard</h1>
            <p className="welcome">
              Welcome back to your{' '}
              <span className="money-manager">Money Manager</span>
            </p>
          </div>
          <MoneyDetails />
          <form onSubmit="" className="add-transaction-con">
            <h1 className="add-transaction-heading">Add Transaction</h1>
            <label htmlFor="title" className="label">
              Title
            </label>
            <br />
            <input type="text" id="title" className="transaction-input" />
            <br />
            <label className="label" htmlFor="amount">
              Amount
            </label>
            <br />
            <input type="text" id="amount" className="transaction-input" />
            <br />
            <label className="label" htmlFor="select">
              Type
            </label>
            <br />
            <select id="select" className="select-el">
              <option value="INCOME">Income</option>
              <option value="Expenses">Expenses</option>
            </select>
            <br />
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default MoneyMangager
