import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';
import './App.css'


function App(){
  const [todos, setTodos] = useState([])
  
  Math.random()

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4()
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler= (id) => {
    setTodos(todos.filter((todo)=> todo.id !== id))
  }

  const toggleTodoHandler =(id) => {
    setTodos(todos.map((todo) =>
      todo.id === id
      ? {...todo,isCompleted: !todo.isCompleted}
      : {...todo}
    ))
  }

  const resetTodosHendler =()=>{
  setTodos([])
  }

 const deleteCompletedTodosHandler = () => {
  setTodos(todos.filter((todo) => !todo.isCompleted))
 }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo ={addTodoHandler}/>
      {!!todos.length && 
      <TodosActions resetTodos={resetTodosHendler} 
      deleteCompletedTodos={deleteCompletedTodosHandler} 
      />}
      <TodoList todos ={todos} deleteTodo={deleteTodoHandler} toggleTodo={toggleTodoHandler}/>
    </div>
  )
}

export default App;
