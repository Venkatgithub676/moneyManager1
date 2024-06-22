import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
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

class MoneyManager extends Component {
  state = {
    listItems: [],
    title: '',
    amt: '',
    type: 'INCOME',
    bal: 0,
    income: 0,
    expenses: 0,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmt = event => {
    this.setState({amt: event.target.value})
  }

  onChangeSelect = event => {
    this.setState({type: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    let {bal, expenses, income} = this.state
    const {title, amt, type} = this.state
    if (type === 'INCOME') {
      bal += parseInt(amt)
      income += parseInt(amt)
    } else {
      expenses += parseInt(amt)
      bal -= parseInt(amt)
    }
    const newObj = {
      id: uuidv4(),
      title,
      amt,
      type,
      clickedDelBtn: false,
    }
    this.setState(prevState => ({
      listItems: [...prevState.listItems, newObj],
      title: '',
      amt: '',
      type: 'INCOME',
      income,
      bal,
      expenses,
    }))
  }

  delBtn = (id, amt, type) => {
    let {bal, income, expenses} = this.state

    if (type === 'INCOME') {
      bal -= parseInt(amt)
      income -= parseInt(amt)
    } else {
      bal += parseInt(amt)
      expenses -= parseInt(amt)
    }
    this.setState(prevState => ({
      listItems: [...prevState.listItems.filter(each => each.id !== id)],
      income,
      bal,
      expenses,
    }))
  }

  formContainer = (title, amt, type) => (
    <form className="add-transaction-con" onSubmit={this.submitForm}>
      <h1 className="add-transaction-heading">Add Transaction</h1>
      <label htmlFor="title" className="label">
        TITLE
      </label>
      <br />
      <input
        type="text"
        onChange={this.onChangeTitle}
        id="title"
        className="transaction-input"
        value={title}
        placeholder="TITLE"
      />
      <br />
      <label className="label" htmlFor="amount">
        AMOUNT
      </label>
      <br />
      <input
        type="text"
        id="amount"
        onChange={this.onChangeAmt}
        className="transaction-input"
        value={amt}
        placeholder="AMOUNT"
      />
      <br />
      <label className="label" htmlFor="select">
        TYPE
      </label>
      <br />
      <select
        id="select"
        value={type}
        className="select-el"
        onChange={this.onChangeSelect}
      >
        {transactionTypeOptions.map(each => (
          <option key={each.optionId} value={each.optionId}>{each.displayText}</option>
        ))}
      </select>
      <br />
      <button type="submit" className="add-btn">
        Add
      </button>
    </form>
  )

  historyContainer = listItems => (
    <div className="history-heading-con">
      <h1 className="history-heading">History</h1>
      <div className="history-con">
        <p className="headings">Title</p>
        <p className="headings">Amount</p>
        <p className="headings">Type</p>
      </div>
      <ul className="ul-con">
        {listItems.map(each => (
          <TransactionItem each={each} delBtn={this.delBtn} key={each.id} />
        ))}
      </ul>
    </div>
  )

  render() {
    const {title, amt, type, bal, income, expenses, listItems} = this.state
    return (
      <div className="bg-container">
        <div className="main-container">
          <div className="name-con">
            <h1 className="name">Hi, Richard</h1>
            <p className="welcome">
              Welcome back to your
              <span className="money-manager"> Money Manager</span>
            </p>
          </div>
          <MoneyDetails bal={bal} income={income} expenses={expenses} />
          <div className="form-history-con">
            {this.formContainer(title, amt, type)}
            {this.historyContainer(listItems)}
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
