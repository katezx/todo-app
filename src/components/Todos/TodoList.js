import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList ({todos}){
    return (
        <div className={styles.todoListContainer}>
    {todos.length === 0 && <h2>Todo list is empty</h2>}
    {todos.map((todo,index) => <Todo key={index} todo ={todo} />)}
    </div>
    )
}

export default TodoList