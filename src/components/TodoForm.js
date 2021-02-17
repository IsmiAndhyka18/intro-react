import React,{useRef} from "react";
import { v4 as uuidv4 } from 'uuid'

export default function TodoForm({todos , setTodos}) {
  const inputRef = useRef();

  function clickHandler() {
    const inputElement = inputRef.current;
    const name = inputRef.current.value

        if (name === "") return

        setTodos([ ...todos, {name: name, complete: false, id: uuidv4()}])
           
        inputRef.current.value = null

   
    console.log(name);
  }
  
    return (
      <div>
          <input  ref={inputRef}  className="todo-input" type="text" placeholder="Whats need to be done ?" />
           <button  onClick={clickHandler} className="button" type="submit"  value="Submit">ADD</button>
      </div>
    )
}


