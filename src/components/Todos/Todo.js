import {RiArchiveLine, RiDeleteBin2Line, RiDeleteBin4Fill} from 'react-icons/ri'
import {FaCheck} from 'react-icons/fa'
import styles from './Todo.module.css'

function Todo({todo, deleteTodo}) {
    return (
<div className={styles.todo} onDoubleClick={() => deleteTodo(todo.id)}>
    <RiArchiveLine className={styles.todoIcon} />
    <div className= {styles.todoText}>{todo.text}</div>
    <RiDeleteBin2Line className={styles.deleteIcon}/>
    <FaCheck className={styles.checkIcon}/>
</div>
    ) 
}

export default Todo