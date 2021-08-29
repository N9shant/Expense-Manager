import React, { useState, useEffect } from 'react'
import '../Styles/Expense.css'

import { db } from '../firebase'
import { useHistory } from 'react-router-dom';

let unsubscribe = () => { }

export default function Expense({ user }) {
    const [text, setText] = useState('');
    const [myExpenses, setMyExpenses] = useState([])
    const history = useHistory()

    useEffect(() => {
        if (user) {
            const docRef = db.collection('expenses').doc(user.uid)
            unsubscribe = docRef.onSnapshot(docSnap => {
                if (docSnap.exists) {
                    console.log(docSnap.data().expenses);
                    setMyExpenses(docSnap.data().expenses);
                }
                else {
                    console.log('no docs');
                }
            })
        }
        else {
            history.push('/login')
        }

        return () => {
            unsubscribe() // cleanup code
        }
    }, [])

    const addExpense = () => {
        db.collection('expenses').doc(user.uid).set({
            expenses: [...myExpenses, text]
        })
    }

    const deleteExpense = (deleteExpense) => {
        const docRef = db.collection('expenses').doc(user.uid);
        docRef.get().then(docSnap => {
            const result = docSnap.data().expenses.filter(expense => expense != deleteExpense)
            docRef.update({
                expenses: result
            })
        })
    }

    return (
        <div className="Expense container center">
            <h2>Add Expenses</h2>
            <div className="input-field">
                <input type="text" value={text} placeholder="eg. Shopping - 3000Rs" onChange={(e) => setText(e.target.value)} />
            </div>
            <button className="btn blue" onClick={() => {
                addExpense()
                setText('')
            }}>Add</button>

            <ul class="collection">
                {myExpenses.map(expense => {
                    return <li className="collection-item" key={new Date().getTime().toString}>
                        {expense}
                        <i className="material-icons right" onClick={() => deleteExpense(expense)}>delete</i>
                    </li>
                })}

            </ul>
        </div>
    )
}
