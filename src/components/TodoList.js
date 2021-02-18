import React from 'react';

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
          <div className={todo.completed ? "done" : ""}>{todo.name}</div>
          <div className="delete" onClick= {() => deleteTodo (todo.id)}>
            &#128465;
            
          </div>
        </div>
      ))}
      <h2>{todos.length > 0 && `${todos.length} ITEM`}</h2>
    </ul>
  )
}


export default TodoList;