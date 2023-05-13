import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'

function TodosActions ({resetTodos,deleteCompletedTodos, completedTodosExist}) {
    return (
<>
<Button title ='Reset Todos' onClick={resetTodos}>
    <RiRefreshLine/>
    </Button>
<Button title ='Clear Completed Todos' onClick={deleteCompletedTodos} disabled={!completedTodosExist}>
    <RiDeleteBin2Line/>
    </Button>
</>
 )
}

export default TodosActions