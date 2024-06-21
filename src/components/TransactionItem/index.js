// Write your code here

import './index.css'

const TransactionItem = props => {
  const {each, delBtn} = props
  const {id, title, amt, type} = each
  const res = type === 'INCOME' ? 'Income' : 'Expenses'
  console.log(id)

  const onClickDelBtn = () => {
    delBtn(id, amt, type)
  }

  return (
    <li className="li-con" key={id}>
      <p className="li-para">{title}</p>
      <p className="li-para">{`Rs ${amt}`}</p>
      <p className="li-para">{res}</p>
      <button
        data-testid="delete"
        className="del-btn"
        type="button"
        onClick={onClickDelBtn}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="del-img"
        />
      </button>
    </li>
  )
}

export default TransactionItem
