import Expenses from './Expenses';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    let title = props.title;

    const clickHandler = () => {
        console.log('Clicked!!!')
    } 

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{itle}</h2>
            </div>
            <div className="expense-item__price">${props.amount}</div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>);
}

export default ExpenseItem;