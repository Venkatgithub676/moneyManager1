// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {bal, income, expenses} = props
  return (
    <div className="money-details-con">
      <div className="con con-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="money-imgs"
        />
        <div className="money-details-name-con">
          <p className="money-dtls-name">Your Balance</p>
          <p
            className="money-dtls-amt"
            data-testid="balanceAmount"
          >{`Rs ${bal}`}</p>
        </div>
      </div>
      <div className=" con con-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="money-imgs"
        />
        <div className="money-details-name-con">
          <p className="money-dtls-name">Your Income</p>
          <p
            className="money-dtls-amt"
            data-testid="incomeAmount"
          >{`Rs ${income}`}</p>
        </div>
      </div>
      <div className="con con-3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="money-imgs"
        />
        <div className="money-details-name-con">
          <p className="money-dtls-name">Your Expenses</p>
          <p
            className="money-dtls-amt"
            data-testid="expensesAmount"
          >{`Rs ${expenses}`}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
