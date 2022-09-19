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

    return (
        <Card className="expenses">
            <ExpensesFilter initialSelect={filteredYear} onSelectedYearFilter={selectedYearFilter}/>
            {
                filterResult.map((items) => (
                    <ExpenseItems 
                        key={items.id}
                        title={items.title} 
                        amount={items.amount} 
                        date={items.date} 
                    /> 
                    )
                )
            }
        </Card>
    )
}

export default Expenses 