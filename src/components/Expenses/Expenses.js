import React, { useState } from "react"
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter"
import Card from "../UI/Card"
import ExpenseItems from "./ExpenseItems"
import './Expenses.css'

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020')

    const selectedYearFilter = (selectedYear) => {
        setFilteredYear(selectedYear)
        console.log('In Expense.js', selectedYear)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter initialSelect={filteredYear} onSelectedYearFilter={selectedYearFilter}/>
            <ExpenseItems title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}/>
            <ExpenseItems title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}/>
            <ExpenseItems title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}/>
            <ExpenseItems title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}/>
        </Card>
    )
}

export default Expenses 