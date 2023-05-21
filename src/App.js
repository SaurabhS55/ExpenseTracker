import './App.css';
import Card from './Components/Card'
import ExpensesFilter from './Components/ExpensesFilter';
import ExpenseItem from './Components/ExpenseItem';
import NewExpense from './Components/NewExpense';
import { useState } from 'react';
export default function App() {
  let o;
  if(localStorage.getItem("expense")===null){
    o=[]
  }
  else{
    o=JSON.parse(localStorage.getItem("expense"))
  }
  const [init,setInit]=useState(o)
  const addExpense=(o)=>{
    let t=[...init,...o]
    setInit(t);
    localStorage.setItem("expense",JSON.stringify(t))
    console.log(init)
    console.log(o)
    
  }
  const [year,setYear]=useState("2019")
const yearHandler=(val)=>{
  setYear(val)
  console.log(val)
}
  return (
    <>
    <div className="new-expense">
     <NewExpense addExpense={addExpense}/>
     </div>
    <Card className="App">
    <div className='expenses'>
      <ExpensesFilter onSelect={year} onYearSelect={yearHandler}/>
      </div>
      {
        init.map((m)=>{
          return <ExpenseItem {...m}></ExpenseItem>
        })
      }
        
    </Card>
     </>
  );
}

