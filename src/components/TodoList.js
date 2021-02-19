import React from 'react';
import { FcFullTrash  } from 'react-icons/fc';

function TodoList({todos , setTodos}) {
 
  
  const deleteTodo = (id) => {
    const deleteArray = [...todos].filter(todo => todo.id !== id);
    setTodos(deleteArray);

  };

  const completeTodo = (id ) => {

    let newArray = [...todos];

       newArray.map((todo) => {
      if(todo.id == id){
        todo.complete =! todo.complete
      }
    })
    setTodos(newArray)

  };

  return (
    <ul>
      {todos.map((todo)=>(
        <div key={todo.id} className="todo">
          <div  className="checkbox" onClick= {() => completeTodo( todo.id )} > 
          {todo.complete && <span>&#x2714;</span>} 
          </div>
          <div className={todo.complete ? "done" : ""}>{todo.name}</div>
          <div className='delete'>
          <FcFullTrash  
            onClick={() => deleteTodo(todo.id)}
            className='delete-icon'
        />
         </div> 
        </div>
      ))}

    </ul>
  )
}
export default TodoList;