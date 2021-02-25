import React,{ useState, useRef} from "react";
import { v4 as uuidv4 } from 'uuid'


export default function TodoForm( {todos , setTodos}) {
  const inputRef = useRef();

  
 //Enter handler

  const clickHandler = (e) => {
    if(e.key === 'Enter'){
     const name = inputRef.current.value
     if (name === "") return
     setTodos([ ...todos, {name: name, complete: false, id: uuidv4()}])
      inputRef.current.value = null
    }
 }
    const  EnterHandler = (e) =>{
    if(e.key === 'Enter'){
        clickHandler()
     }
}
  
    return (
      <div>
          <input  ref={inputRef}  onKeyPress={clickHandler} className="todo-input" type="text" placeholder="Create Task" />
          
      </div>
    )
}


