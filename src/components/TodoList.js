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
          <input type="radio" className="checkbox" onClick= {() => completeTodo (todo.id)} checked={todo.complete}/> {todo.name}
          <div className="delete" onClick= {() => deleteTodo (todo.id)}>
            &#128465;
            
          </div>
        </div>
      ))}
    </ul>
  )
}


export default TodoList;