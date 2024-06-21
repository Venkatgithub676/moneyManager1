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

class MoneyMangager extends Component {
  state = {
    listItems: [],
    title: '',
    amt: '',
    type: 'Income',
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
    const {title, amt, type} = this.state
    const newObj = {
      id: uuidv4(),
      title,
      amt,
      type,
      clickedDelBtn: false,
    }
    this.setState(prevState => ({listItems: [...prevState.listItems, newObj]}))
  }

  formContainer = () => (
    <form className="add-transaction-con" onSubmit={this.submitForm}>
      <h1 className="add-transaction-heading">Add Transaction</h1>
      <label htmlFor="title" className="label">
        Title
      </label>
      <br />
      <input
        type="text"
        onChange={this.onChangeTitle}
        id="title"
        className="transaction-input"
      />
      <br />
      <label className="label" htmlFor="amount">
        Amount
      </label>
      <br />
      <input
        type="text"
        id="amount"
        onChange={this.onChangeAmt}
        className="transaction-input"
      />
      <br />
      <label className="label" htmlFor="select">
        Type
      </label>
      <br />
      <select id="select" className="select-el" onChange={this.onChangeSelect}>
        {transactionTypeOptions.map(each => (
          <option value={each.displayText}>{each.displayText}</option>
        ))}
      </select>
      <br />
      <button type="submit" className="add-btn">
        Add
      </button>
    </form>
  )

  historyContainer = () => {
    const {listItems} = this.state
    return (
      <div className="history-heading-con">
        <h1 className="history-heading">History</h1>
        <div className="history-con">
          <h1 className="headings">Title</h1>
          <h1 className="headings">Amount</h1>
          <h1 className="headings">Type</h1>
        </div>
        <ul className="ul-con">
          {listItems.map(each => (
            <TransactionItem each={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <div className="main-container">
          <div className="name-con">
            <h1 className="name">Hi, Richard</h1>
            <p className="welcome">
              Welcome back to your
              <span className="money-manager">Money Manager</span>
            </p>
          </div>
          <MoneyDetails />
          <div className="form-history-con">
            {this.formContainer()}
            {this.historyContainer()}
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyMangager
