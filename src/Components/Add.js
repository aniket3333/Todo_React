import React from 'react'
import {Button} from 'react-bootstrap';
const Add = ({task,onChangeTask,onAddTask}) => {
   const hanc = (e)=>{
e.preventDefault()
onAddTask(task)
   }
  return (
    <>
    <form>
    <div className='form-group'>

<input type='text' placeholder='add task' name='task' value={task} onChange={onChangeTask} className='form-control'/>
    </div>
    <br/>
    <Button onClick={hanc}>Add Task</Button>
    
   


    </form>
    </>
  )
}

export default Add
