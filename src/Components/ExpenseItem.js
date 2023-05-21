import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css'
function ExpenseItem({name,amount,date}){
    
    return(
        <Card className="expense-item">
            <ExpenseDate date={new Date(date)} />
            <h2>{name}</h2>
            <div className="expense-item__description">
                <div className="expense-item__price">${amount}</div>
            </div>
        </Card>
    );
}
export default ExpenseItem;