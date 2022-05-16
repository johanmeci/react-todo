import { useState } from "react";
import Todo from "./Todo";

export default function TodoApp() {

  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    const value = e.target.value;
    setTitle(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false
    }

    const temp = [...todos];
    temp.unshift(newTodo);

    setTodos(temp);
  }

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input 
          onChange={handleChange} 
          className="todoInput" 
          type="text" 
          value={title} 
        />

        <input 
          onClick={handleSubmit} 
          className="buttonCreate" 
          type="submit" 
          value="Create Todo" 
        />
      </form>

      <div className="todosContainer">
        {
          todos.map(item => (
            <Todo key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
  );
}