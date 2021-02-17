import React, {useState} from 'react';

function TodoList() {

  const initalTodos = [
    {id: 1, name: '1st todo', complete: false},
    {id: 2, name: '2nd todo', complete: true},
    {id: 3, name: '3rd todo', complete: false},
  ];

  const [todos, setTodos] = useState(initalTodos);
  
  

  return (

    <ul>
      {todos.map((todo)=>(


        <div className="todo" key={todo.id}>
          <input  className="checkbox" type="checkbox" checked={todo.complete}/> {todo.name}
        </div>
      ))}
    </ul>
  )
}


export default TodoList;