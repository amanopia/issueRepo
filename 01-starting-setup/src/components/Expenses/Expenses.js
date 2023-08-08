import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

export default function Expenses() {
  const expenseArray = [
    { id: 1, title: "Car Insurance", amount: 456.4, date: new Date() },
    { id: 2, title: "Fridge", amount: 4565.4, date: new Date() },
    { id: 3, title: "Groceries", amount: 46.4, date: new Date() },
    { id: 4, title: "Clothes", amount: 1456.4, date: new Date() },
  ];

  return (
    <Card className="expenses">
      <ExpenseItem expense={expenseArray[0]}></ExpenseItem>
      <ExpenseItem expense={expenseArray[1]}></ExpenseItem>
      <ExpenseItem expense={expenseArray[2]}></ExpenseItem>
      <ExpenseItem expense={expenseArray[3]}></ExpenseItem>
    </Card>
  );
}
