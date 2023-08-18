import React from "react";
import { Button } from "react-bootstrap";
const Add = ({ task, onChangeTask, onAddTask, message, le }) => {
  const hanc = (e) => {
    e.preventDefault();
    onAddTask(task);
  };
  return (
    <>
      <form>
        <div className="form-group">
          <input
            type="text"
            placeholder="add task"
            name="task"
            value={task}
            onChange={onChangeTask}
            className="form-control"
          />
        </div>
        <br />
        <Button onClick={hanc}>Add Task</Button>
        <br />
        <hr />
        {le > 0 && (
          <span className="text-success p-5">
            {message} :{" "}
            <span
              style={{
                color: "white",
                backgroundColor: "black",
                padding: "5px",
              }}
            >
              {le}
            </span>
          </span>
        )}
      </form>
    </>
  );
};

export default Add;
