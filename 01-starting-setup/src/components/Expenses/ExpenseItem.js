import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
// Default import
import React from 'react';
// named import
import {useState} from 'react';

function ExpenseItem (props) {
    
    let [iVal, setIVal] = useState(0);
    const [title, setTitle] = useState(props.expense.title);
    const titlesArr = ['apple', 'tesla', 'cooler', 'eggs'];

    function clickHandler() { 
        if( iVal < Array.length){
            
            setTitle(titlesArr[iVal]);
            setIVal(iVal => iVal++);
            console.log(iVal);
        } else {
            setTitle("Limit reached");
        }
        console.log(title);
    }
    return (
        <Card className="expense-item">
            {/* Passing date from the prop here */}
            <ExpenseDate date={props.expense.date}/>
            <div className="expense-item__description">

               <h2>{title}</h2>
                <div className="expense-item_price">${props.expense.amount}</div>
            </div>
            <button on onClick={clickHandler}>Change Title</button>
            
        </Card>
    )
}
export default ExpenseItem;