import './ExpenseDate.css'
import Card from '../UI/Card';

function ExpenseDate(props) {
    const month = props.date.toLocaleDateString('en-US', {month: 'long'})
    const date = props.date.toLocaleDateString('en-US', {day: '2-digit'})
    const year = props.date.getFullYear();

    return (
        <Card className="expense__date">
            <div>{date}</div>
            <div>{month}</div>
            <div>{year}</div>
        </Card>
    )
}

export default ExpenseDate;