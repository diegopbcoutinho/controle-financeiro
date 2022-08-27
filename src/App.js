import React, {useState, useEffect} from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Resume from './components/Resume'
import GlobalStyle from './styles/global'


function App() {
    const data = localStorage.getItem("transactions");
    const [transactionsList, setTransactionsList] = useState(
        data ? JSON.parse(data) : []
    );
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [saldo, setSaldo] = useState(0);

    useEffect(() => {
        const amountExpense = transactionsList
            .filter((item) => item.expense)
            .map((transaction) => Number(transaction.amount))
        const amountIncome = transactionsList
            .filter((item) => !item.expense)
            .map((transaction) => Number(transaction.amount))
    
        const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2)
        const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2)

        const saldo = Math.abs(income - expense).toFixed(2)

        setIncome(`R$ ${income}`)
        setExpense(`R$ ${expense}`)
        setSaldo(`${Number(income) < Number(expense) ? "-" : ""}R$ ${saldo}`)
    }, [transactionsList]);

    const handleAdd = (transaction) => {
        const newArrayTransactions = [...transactionsList, transaction];

        setTransactionsList(newArrayTransactions);

        localStorage.setItem("transactions", JSON.stringify(newArrayTransactions))
    }

    return (
        <>
        <Header />
        <Resume income={income} expense={expense} saldo={saldo} />
        <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList} />
        <GlobalStyle />
        </>
    )
}

export default App
