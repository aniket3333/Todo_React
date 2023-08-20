import React, { useState, useEffect } from "react";
import { FaTasks } from "react-icons/fa";
import { MdTask } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { Button } from "react-bootstrap";
import Add from "./Add";
import Show from "./Show";
import Update from "./Update";
const Todo = () => {
  const [show, setShow] = useState(true);
  const [updater, setUpdater] = useState("");
  const [indexUpdate, setIndexUpdate] = useState(0);
  const [update, setUpdate] = useState(false);
  const [constMessage, setConstMessage] = useState("");
  const [len, setLen] = useState(0);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    debugger;
    const num = tasks.length;
    setLen(num);
  }, [tasks]);
  const handle = (item) => {
    debugger;
    if (item.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, item]);
      setTask("");
      setConstMessage("Task Added Successfully");
      const num = tasks.length;
      setLen(num);
      console.log(tasks);
    }
  };

  const updateVal = (index) => {
    setIndexUpdate(index);

    setShow(false);
    setUpdate(true);
  };

  const deleteTask = (index) => {
    const newList = tasks.filter((_, i) => i !== index);
    setTasks(newList);
    setUpdate(false);
  };

  const AllDel = () => {
    setTasks([]);
    setConstMessage("All Tasks Deleted Successfully");
  };

  const updateValue = (val, indexUpdate) => {
    const newTasks = tasks.map((item, index) => {
      if (index === indexUpdate) {
        return val;
      }
      return item;
    });

    setTasks(newTasks);
    setShow(true);
  };

  return (
    <>
      <div className="container">
        <div className="card mt-3">
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
                  {tasks.length === 0 && (
                    <span className="text-danger">
                      {" "}
                      You have Not Added Any Task{" "}
                    </span>
                  )}
                  <Button className="text-left" onClick={() => setShow(false)}>
                    {" "}
                    Add Task <AiOutlinePlus />
                  </Button>
                  <hr />

                  {tasks.length > 0 && (
                    <div className="card">
                      <div className="card-body">
                        <Show
                          tas={tasks}
                          onDeleteClick={deleteTask}
                          AllDelete={AllDel}
                          UpdateChange={updateVal}
                          constMessage={constMessage}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-sm-1"></div>
              </div>
            ) : update ? (
              <Update
                onUpdateValue={(e) => setUpdater(e.target.value)}
                valUp={updater}
                update={updateValue}
                numr={indexUpdate}
              />
            ) : (
              <div className="row">
                <div className="text-center">
                  <h3 className="text-muted p-2">
                    Add Task <FaTasks />
                  </h3>
                  {len > 0 && (
                    <Button className="text-left" onClick={() => setShow(true)}>
                      {" "}
                      Show All Taks
                      <AiOutlinePlus />
                    </Button>
                  )}
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
          <div className="card-footer">
<div className="row">
<div className="col-2">

</div>
<div className="col-10">
<div>
  <span> Git Link </span>
  <a  href='https://github.com/aniket3333/Todo_React.git' target='_blank'>Get Code</a>
</div>

</div>
<div className="col-2">

</div>
</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
