import React, { useState, useEffect } from "react";
import axios from "axios";
interface Todo {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}
function WorkingWithArrays() {
    const [errorMessage, setErrorMessage] = useState(null);

    const API = "http://localhost:4000/a5/todos";
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });
    const [todos, setTodos] = useState<Todo[]>([]);
    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };
    const removeTodo = async (todo: any) => {
        const response = await axios
            .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };
    const deleteTodo = async (todo: any) => {
        try {
            const response = await axios.delete(
              `${API}/${todo.id}`);
            setTodos(todos.filter((t) => t.id !== todo.id));
          } catch (error : any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
          }
      
    };

    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };
    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };

    const fetchTodoById = async (id: number) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };
    const updateTitle = async () => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };
    const updateTodo = async () => {
        try {
            const response = await axios.put(
              `${API}/${todo.id}`, todo);
            setTodos(todos.map((t) => (
              t.id === todo.id ? todo : t)));
          } catch (error :any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
          }
      
    };



    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div>
            <h3>Working with Arrays</h3>
            <h4>Retrieving Arrays</h4>
            <a href={API}>
                Get Todos
            </a>
            <h4>Retrieving an Item from an Array by ID</h4>
            <label>Id</label>
            <input value={todo.id} type="number"
                onChange={(e) => setTodo({
                    ...todo,
                    id: parseInt(e.target.value)
                })} />
            <br />
            <label>Title</label>
            <input type="text" value={todo.title}
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value
                })} />
            <br />
            <label>Description</label>
            <textarea value={todo.description}
                onChange={(e) => setTodo({
                    ...todo,
                    description: e.target.value
                })} />
            <br />
            <label>Due Date</label>
            <input value={todo.due} type="date"
                onChange={(e) => setTodo({
                    ...todo, due: e.target.value
                })} />
            <br />
            <label>
                <input checked={todo.completed} type="checkbox"
                    onChange={(e) => setTodo({
                        ...todo, completed: e.target.checked
                    })} />
                Completed
            </label>
            <br />
            <button className="btn btn-primary" onClick={postTodo}> Post Todo </button>


            <br />
            <a href={`${API}/${todo.id}`}>
                Get Todo by ID
            </a>

            <h3>Filtering Array Items</h3>
            <a href={`${API}?completed=true`}>
                Get Completed Todos
            </a>
            <h3>Creating new Items in an Array</h3>
            <a className="btn btn-primary" href={`${API}/create`}>
                Create Todo
            </a>
            <h3>Deleting from an Array</h3>
            <a className="btn btn-primary"
                href={`${API}/${todo.id}/delete`}>
                Delete Todo with ID = {todo.id}
            </a>

            <h3>Updating an Item in an Array</h3>
            <a href={`${API}/${todo.id}/title/${todo.title}`} >
                Update Title to {todo.title}
            </a>
            <br />
            <a href={`${API}/${todo.id}/description/${todo.description}`} >
                Update Description to {todo.description}
            </a>
            <br />
            <a href={`${API}/${todo.id}/completed/${todo.completed}`} >
                Update completed to {todo.completed}
            </a>

            <h3>To do List</h3>
            <input value={todo.id} type="number"
                onChange={(e) => setTodo({
                    ...todo,
                    id: parseInt(e.target.value)
                })} />
            <input type="text" value={todo.title}
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value
                })} />
            {/* <button className="btn btn-primary" onClick={createTodo} >
                Create Todo
            </button>
            <button className="btn btn-success" onClick={updateTitle} >
                Update Title
            </button> */}

            <button className="btn btn-primary" onClick={postTodo}>
                Post Todo
            </button>
            <button className="btn btn-success" onClick={updateTodo}>
                Update Todo
            </button>


            <ul>
                {todos.map((todo: any) => (
                    <li key={todo.id} className="list-group-item">
                        <input checked={todo.completed}
                            type="checkbox" readOnly />
                        {todo.title}
                        <p>{todo.description}</p>
                        <p>{todo.due}</p>

                        <button className="btn btn-danger" onClick={() => deleteTodo(todo)} >
                            Delete
                        </button>
                        <button className="btn btn-warning" onClick={() => fetchTodoById(todo.id)} >
                            Edit
                        </button>
                    </li>
                ))}
            </ul>
            {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}
        </div>
    );
}
export default WorkingWithArrays;