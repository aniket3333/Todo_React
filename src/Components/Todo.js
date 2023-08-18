import React, { useState } from "react";
import { FaTasks } from "react-icons/fa";
import { MdTask } from "react-icons/md";
import {AiOutlinePlus } from "react-icons/ai";
import {Button} from 'react-bootstrap';
import Add from "./Add";
import Show from "./Show";
import Update from './Update';
const Todo = () => {

  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(false);
  const [constMessage, setConstMessage] = useState('');
  const [len, setLen] = useState(0);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handle = (item) => {
    debugger
    if (item.trim() !== "") {
      setTasks([...tasks, item]);
      setTask("");
      setConstMessage('Task Added Successfully')
      const num = tasks.length
      setLen(num)
      
    }
  };

  const updateVal= () =>{
   
    setShow(false)
    setUpdate(true)
  }

  const deleteTask = (index) => {
    const newList = tasks.filter((_, i) => i !== index);
    setTasks(newList);
  };

  const AllDel = () => {
    setTasks([]);
  };
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <div className="text-center">
              <h1 className="text-primary">Todo App</h1>
            </div>
          </div>
          <div className="card-body">
            {show ? (
              <div className="row">
                <div className="text-center">
                  <h3 className="text-muted p-2">
                    All Task <MdTask />
                  </h3>
                  <Button className="text-left" onClick={()=>setShow(false)}> Add Task <AiOutlinePlus/></Button>
                  <hr />

                  <div className="card">
                    <div className="card-body">
                      <Show
                        tas={tasks}
                        onDeleteClick={deleteTask}
                        AllDelete={AllDel}
                        UpdateChange={updateVal}                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-1"></div>
              </div>
            ) : update ?(<Update/>): (
              <div className="row">
                <div className="text-center">
                  <h3 className="text-muted p-2">
                    Add Task <FaTasks />
                  </h3>
                {len>0 &&   <Button className="text-left" onClick={()=>setShow(true)}> Show All Taks<AiOutlinePlus/></Button>}
                  <hr />

                  <div className="card">
                    <div className="card-body">
                      <Add
                        task={task}
                        onChangeTask={(e) => setTask(e.target.value)}
                        onAddTask={handle}
                        message={constMessage}
                        le={len}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
