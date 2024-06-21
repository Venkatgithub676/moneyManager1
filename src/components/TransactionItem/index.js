// Write your code here

import './index.css'

const TransactionItem = props => {
  const {each, delBtn} = props
  const {id, title, amt, type} = each

  const onClickDelBtn = () => {
    delBtn(id)
  }

  return (
    <li className="li-con">
      <p className="li-para">{title}</p>
      <p className="li-para">{amt}</p>
      <p className="li-para">{type}</p>
      <button className="del-btn" type="button" onClick={onClickDelBtn}>
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
