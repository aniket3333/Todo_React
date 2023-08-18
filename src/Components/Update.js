import React from "react";
import { Button } from "react-bootstrap";
const Update = ({ onUpdateValue, valUp, update, numr }) => {
  const handleForm = (e) => {
    e.preventDefault();
    update(valUp, numr);
  };
  return (
    <>
      <form>
        <div className="form-group">
          <input
            type="text"
            placeholder="updated value"
            className="form-control"
            value={valUp}
            onChange={onUpdateValue}
          />
        </div>
        <br />
        <div className="text-center">
          <Button type="update" onClick={handleForm}>
            Update
          </Button>
        </div>
      </form>
    </>
  );
};

export default Update;
