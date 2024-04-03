import React, { useState, useEffect } from "react";
import axios from "axios";
function WorkingWithArrays() {
  const [errorMessage, setErrorMessage] = useState(null);
    const API = "http://localhost:4000/a5/todos";
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    })
    const [todos, setTodos] = useState<any[]>([]);
    const fetchTodos = async () => {
      const response = await axios.get(API);
      setTodos(response.data);
    };
    const deleteTodo = async (todo: any) => {
      try{
      const response = await axios.delete(`${API}/${todo.id}`);
      setTodos(todos.filter((t) => t.id !== todo.id));
      }
    catch (error: any) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }

    };
    const updateTodo = async () => {
      try{
      const response = await axios.put(`${API}/${todo.id}`, todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
    };
  
    const createTodo = async () => {
      const response = await axios.get(`${API}/create`);
      setTodos(response.data);
    };  
    const fetchTodoById = async (id: number) => {
      const response = await axios.get(`${API}/${id}`);
      setTodo(response.data);
    };
    const updateTitle = async () => {
      const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
      setTodos(response.data);
    };
    const postTodo = async () => {
      const response = await axios.post(API, todo);
      setTodos([...todos, response.data]);
    };  
    useEffect(() => {
      fetchTodos();
    }, []);
  
    return (
      <div>
        <h3>Working with Arrays</h3>
        <ul>
        <input type="number" value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: parseInt(e.target.value) })}/><br></br>
      <input type="text" value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value })}/><br></br>
          <textarea value={todo.description}
        onChange={(e) => setTodo({ ...todo,
          description: e.target.value })} /><br></br>
      <input value={todo.due} type="date"
        onChange={(e) => setTodo({
          ...todo, due: e.target.value })} /><br></br>
      <label>
        <input type="checkbox"
          onChange={(e) => setTodo({
            ...todo, completed: e.target.checked })} />
        Completed
      </label><br></br>
      {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}
      <button onClick={postTodo}> Post Todo </button>
        <button onClick={createTodo} >
        Create Todo
      </button>
      <button onClick={updateTodo} >
        Update Todo
      </button>
        {todos.map((todo) => (
          <li key={todo.id}>
            <button onClick={() => fetchTodoById(todo.id)} >
          Edit
        </button>
            <button onClick={() => deleteTodo(todo)} >
          Remove
        </button>
            {todo.title}
          </li>
        ))}
      </ul>
        <input type="number" value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: parseInt(e.target.value) })}/>
      <input type="text" value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value })}/>
      <h3>Updating an Item in an Array</h3>
      <a href={`${API}/${todo.id}/title/${todo.title}`} >
        Update Title to {todo.title}
      </a>
        <h4>Retrieving Arrays</h4>
        <a className="btn btn-primary" href={API}>
          Get Todos
        </a>
        <h4>Retrieving an Item from an Array by ID</h4>
      <input type="number" value={todo.id}
        onChange={(e) => setTodo({ ...todo,
          id: parseInt(e.target.value) })}/>
      <a href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>
      <h3>Filtering Array Items</h3>
        <a className="btn btn-primary" href={`${API}?completed=true`}>
            Get Completed Todos
        </a>
        <h3>Creating new Items in an Array</h3>
            <a className="btn btn-primary" href={`${API}/create`}>
                Create Todo
            </a>
            <h3>Deleting from an Array</h3>
      <a className="btn btn-primary" href={`${API}/${todo.id}/delete`}>
        Delete Todo with ID = {todo.id}
      </a>
      <h3>Editing Completed/Description properties in Todos</h3>
      <input type="number" value={todo.id} onChange={(e) =>
      setTodo({...todo, id: parseInt(e.target.value)})}/> 
      <h3>Completed</h3><input type="checkbox" 
      onChange={(e) => 
        setTodo({ ...todo,
          completed: e.target.checked })}
          checked={todo.completed}/>
      <h3>Description</h3>    <input type="text" value={todo.description}
      onChange={(e) => 
        setTodo({ ...todo,
          description: e.target.value })}
          /><br></br>
         <a className="btn btn-primary" href={`${API}/update/description/${todo.id}/${todo.description}`}>
        Update Todo Description with ID = {todo.id}
      </a> 
      <a className="btn btn-danger" href={`${API}/update/completed/${todo.id}/${todo.completed}`}>
        Update Todo Completed with ID = {todo.id}
      </a> 
      </div>
      
    );
  }
  export default WorkingWithArrays;