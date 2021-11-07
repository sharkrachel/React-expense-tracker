import './ExpenseItem.css'

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>November 28, 2021</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
            </div>
            <div className="expense-item__price">$338.83</div>
        </div>);
}

export default ExpenseItem;