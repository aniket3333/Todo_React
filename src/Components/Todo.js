import React,{useState} from 'react'
import {FaTasks} from 'react-icons/fa';
import {MdTask} from 'react-icons/md';
import Add from './Add';
import Show from './Show';
const Todo = () => {
  const [task,setTask] =   useState('')
  const [tasks,setTasks] =   useState([])
  const handle = (item) => {
    if(item.trim()!=='')
    {
        setTasks([...tasks,item]);
        setTask('')
       }
  }

  const deleteTask = (index) =>{

    const newList = tasks.filter((_,i)=>i!==index)
    setTasks(newList) 
  }

  const AllDel = () =>{

  
    setTasks([]) 
  }
  return (
    <>
     <div className='container'>
<div className='card'>
<div className='card-header'>
<div className='text-center'>
<h1 className='text-primary'>
Todo App
</h1>
</div>
</div>
<div className='card-body'>
<div className='row'>
<div className='col-sm-6 border'>
<div className='text-center'>
<h3 className='text-muted p-2'>
    Add Task <FaTasks/>
</h3>
<hr/>
<div className='row m-1'>
<div className='col-sm-1'>
    
</div>
<div className='col-sm-8'>
<div className='card'>
<div className='card-body'>
   <Add task={task} onChangeTask={(e)=>setTask(e.target.value)} onAddTask={handle}/>
</div>
</div>
</div>
<div className='col-sm-1'>

</div>
</div>
</div>
</div>
<div className='col-sm-6 border'>
<div className='text-center'>
<h3 className='text-muted p-2'>
    All Task <MdTask/>
</h3>
<hr/>
<div className='row m-1'>
<div className='col-sm-1'>
    
</div>
<div className='col-sm-8'>
<div className='card'>
<div className='card-body'>
   <Show tas={tasks} onDeleteClick={deleteTask} AllDelete={AllDel}/>
</div>
</div>
</div>
<div className='col-sm-1'>

</div>
</div>
</div>
</div>
</div>
</div>
</div>
     </div>
    </>
  )
}

export default Todo
