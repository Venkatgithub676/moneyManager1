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
        <div className="name-con">
          <h1 className="name">Hi, Richard</h1>
          <p className="welcome">
            Welcome back to your{' '}
            <span className="money-manager">Money Manager</span>
          </p>
        </div>
        <MoneyDetails />
      </div>
    )
  }
}

export default MoneyMangager
