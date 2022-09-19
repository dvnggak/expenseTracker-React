import React, { useState } from "react"
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter"
import Card from "../UI/Card"
import ExpenseItems from "./ExpenseItems"
import './Expenses.css'

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020')

    const selectedYearFilter = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filterResult = props.expenses.filter((item) => {
        return item.date.getFullYear().toString() === filteredYear
    })

    let expensesContent = <p>No Expenses found !</p>

    if (filterResult.length > 0) {
        expensesContent = filterResult.map((items) => (
            <ExpenseItems 
                key={items.id}
                title={items.title} 
                amount={items.amount} 
                date={items.date} 
            /> 
            )
        )
    }

    return (
        <Card className="expenses">
            <ExpensesFilter initialSelect={filteredYear} onSelectedYearFilter={selectedYearFilter}/>
            {
                expensesContent
            }
        </Card>
    )
}

export default Expenses 