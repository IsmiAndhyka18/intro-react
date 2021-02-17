import React, {useState} from 'react';

function TodoList() {

  const initalTodos = [
    {id: 1, name: 'LEARN REACT', complete: false},
    {id: 2, name: 'BE AWESOME', complete: true},
    {id: 3, name: 'GOOD JOB ISMI', complete: false},
  ];

  const [todos, setTodos] = useState(initalTodos);
  
  

  return (

    <ul>
      {todos.map((todo)=>(


        <div key={todo.id} className="todo">
          <input type="radio" className="checkbox" checked={todo.isCompleted && <span>&#x2714;</span>}/> {todo.name}
        </div>
      ))}
    </ul>
  )
}


export default TodoList;