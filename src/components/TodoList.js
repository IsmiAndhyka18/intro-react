import React from 'react';

function TodoList({todos}) {

  
  
  


  return (
    <ul>
      {todos.map((todo)=>(
        <div key={todo.id} className="todo">
          <input type="radio" className="checkbox" checked={todo.isCompleted && <span>&#x2714;</span>}/> {todo.name}
          <div className="delete">
            &#128465;
          </div>
        </div>
      ))}
    </ul>
  )
}


export default TodoList;