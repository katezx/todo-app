import {RiArchiveLine} from 'react-icons/ri'
import styles from './Todo.module.css'

function Todo({todo, index, deleteTodo}) {
    return (
<div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
    <RiArchiveLine className={styles.todoIcon} />
    <div className= {styles.todoText}>{todo}</div>
</div>
    ) 
}

export default Todo