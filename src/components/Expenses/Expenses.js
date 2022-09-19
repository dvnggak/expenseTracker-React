import React, { useState } from "react"
import ExpensesFilter from "./ExpensesFilter"
import Card from "../UI/Card"
import './Expenses.css'
import ExpensesList from "./ExpensesList"

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020')

    const selectedYearFilter = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filterResult = props.expenses.filter((item) => {
        return item.date.getFullYear().toString() === filteredYear
    })

    return (
        <Card className="expenses">
            <ExpensesFilter initialSelect={filteredYear} onSelectedYearFilter={selectedYearFilter}/>
            <ExpensesList filter={filterResult}/>
        </Card>
    )
}

export default Expenses 