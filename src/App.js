import React,{ useState, useRef ,useEffect} from "react" ;
import './App.css';
import TodoList from './components/TodoList'
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
   const [todos, setTodos] = useState([])
   const todoNameRef = useRef()

   //useEFFECT FOR SAFE THE VALUE  WHEN YOU REFESH VALUE IS STILL THERE
   useEffect(() => {
     const storedTodos = JSON.parse(localStorage.getItem
      (LOCAL_STORAGE_KEY))
     if (storedTodos) setTodos(storedTodos)
     
   }, [])

   useEffect (() => {
     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify (todos))
   }, [todos])
   
   //checkbox
   function toggleTodo(id){
     const newTodos = [...todos]
     const todo = newTodos.find(todo => todo.id === id)
     todo.complete = !todo.complete
     setTodos(newTodos)
   }

   function handleAddTodo(e){
     const name = todoNameRef.current.value
     if(name === '') return
     setTodos(prevTodos => {
       return [...prevTodos,{ id: uuidv4(), name: name, complete:false }]

     })
     todoNameRef.current.value =null

   }

   function handleClearTodo (){
     const newTodos= todos.filter(todo => !todo.complete)
     setTodos(newTodos)

   }
  return (
    <>
    <div className="container">
        <h1>todos</h1>
        <p>Whats need to be done</p>
        < TodoList  todos={todos} toggleTodo={toggleTodo}/>
        <input  className="todo-input" ref={todoNameRef} type="text"/> <br></br>
        <button  className="todo-button" onClick={handleAddTodo}>Add Todo</button>
        <button  className="todo-button" onClick={handleClearTodo}>Clear Todo</button>
        <div>{todos.filter(todo=> !todo.complete).length} left todo</div>
    </div>

    </>
  );
}

export default App;
