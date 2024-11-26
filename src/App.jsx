import { useState } from "react";

import Navbar from "./Components/Navbar";

import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  
  
  
  const handleEdit = () =>{

  }

const handleDelete = () =>{

}

const handleAdd = ()=>{
  setTodos([...todos, { id:uuidv4(), todo, isCompleted: false}])
  setTodo("")
  console.log(todos)


}
const handleChange = (e)=>{
  setTodo(e.target.value)

}

const handleCheckbox =(e) => {
  console.log(e, e.target)
  let id = e.target.name;
  console.log(`the id is ${id}`)
  let index = todos.findIndex(item=>{
    return item.id === id;
  })
  console.log(index)
  let newTodos = [...todos];
  newTodos[index].isCompleted = !newTodos[index].isCompleted;
  setTodos = (newTodos)
  console.log(newTodos, todos)
}

  return (
    <>
      <Navbar/>
      <div className="Container mx-10 my-5 rounded-xl bg-violet-100 p-4 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className=" text-lg font-bold">Add a Todo</h2>
          <input onChange ={handleChange} value ={todo} type="text" className="w-1/2" />
          <button onClick={handleAdd} className="bg-violet-800 hover:bg-violet-950 p-2 text-sm font-bold py-1 text-white rounded-md mx-6">Add</button>
        </div>
        <h2 className="text-lg font-bold">Your Todos</h2>
        <div className="todos">
          {todos.map(item=>{

          
          return <div key={item.id} className="todo flex w-1/3 my-3 justify-between">
            <input name={item.id} onChange={handleCheckbox} type ="checkbox" value ={item.isCompleted} id=""/>
            <div className= {item.isCompleted ? "line-through":""}>{item.todo}</div>
            <div className="buttons">
              <button onClick={handleEdit} className="bg-violet-800 hover:bg-violet-950 p-2 text-sm font-bold py-1 text-white rounded-md mx-1">Edit</button>
              <button onClick={handleDelete} className="bg-violet-800 hover:bg-violet-950 p-2 text-sm font-bold py-1 text-white rounded-md mx-1">Delete</button>
            </div>
          </div>
          })}
        </div>
      </div>
    </>
  );
}

export default App;
