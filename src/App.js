import React from "react" ;
import './App.css';


const App = () => {
  return (
    <div>
			<h1>To-Do List</h1>
      <form action="#">
        <input type="text" name="name" placeholder="What need to be done ?" />
        <input type="submit" value="ADD" />
      </form>
		</div>
  )
}
export default App ;