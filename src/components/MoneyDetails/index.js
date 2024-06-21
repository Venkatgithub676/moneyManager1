// Write your code here

import './index.css'

const MoneyDetails = () => (
  <div className="money-details-con">
    <div className="con con-1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        alt="balance"
        className="money-imgs"
      />
      <div className="money-details-name-con">
        <p className="money-dtls-name">Your Balance</p>
        <p className="money-dtls-amt">Rs 70000</p>
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
        <p className="money-dtls-amt">Rs 70000</p>
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
        <p className="money-dtls-amt">Rs 70000</p>
      </div>
    </div>
  </div>
)

export default MoneyDetails
