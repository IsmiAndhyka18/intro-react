import React from 'react';

function TodoList({todos , setTodos}) {
  

  const deleteTodo = (id) => {
    const deleteArray = [...todos].filter(todo => todo.id !== id);
    setTodos(deleteArray);
    
  };


  return (
    <ul>
      {todos.map((todo)=>(
        <div key={todo.id} className="todo">
          <input type="radio" className="checkbox" checked={todo.isCompleted && <span>&#x2714;</span>}/> {todo.name}
          <div className="delete" onClick= {() => deleteTodo (todo.id)}>
            &#128465;
          </div>
        </div>
      ))}
    </ul>
  )
}


export default TodoList;