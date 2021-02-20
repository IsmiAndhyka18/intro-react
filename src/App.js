import React, { useEffect,useState} from "react" ;
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import logo from './image/todo.png'; 



function App() {

  const [todos, setTodos] = useState([]);

  const LSKEY = "MyTodoApp";

  

  useEffect(() => {
    if(window.localStorage.getItem(LSKEY+".todos")!=null)
    {
      let localStorageTodo= JSON.parse(localStorage.getItem(LSKEY+".todos"))
      setTodos(localStorageTodo)
    }
   
  }, [])


  // Save todos to localStorage
  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
  });

  
  return (
    <div className="App ">
      <img src={logo} alt="Logo" />
        <TodoForm todos={todos} setTodos={setTodos}  />
        <TodoList  todos={todos} setTodos={setTodos} />
      </div>
  )
}
export default App ;