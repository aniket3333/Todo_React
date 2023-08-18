import React from "react";
import { MdDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { Button } from "react-bootstrap";
const Show = ({
  tas,
  onDeleteClick,
  AllDelete,
  UpdateChange,
  constMessage,
}) => {
  return (
    <>
      <h4 className="text-muted p-2">
        List of Added Task
        {tas.length > 1 && (
          <span className="p-2">
            <span style={{ color: "red" }}> All </span>
            <Button
              className="p-1"
              style={{ color: "red" }}
              onClick={() => AllDelete()}
            >
              <MdDelete />
            </Button>
          </span>
        )}
      </h4>
      <div className="border mt-2 p-3">
        {tas.length > 0 ? (
          <ol>
            {tas.map((item, index) => (
              <li key={index}>
                <div className="row p-2">
                  <div className="col-8">
                    <span
                      className="text-capitalize"
                      style={{
                        fontSize: "20px",
                        backgroundColor: "grey",
                        padding: "5px",
                        border: "1px",
                        borderRadius: "8px",
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                  <div className="col-2">
                    <Button
                      className="p-1"
                      style={{ color: "red" }}
                      onClick={() => onDeleteClick(index)}
                    >
                    
                      <MdDelete />
                    </Button>
                  </div>
                  <div className="col-2">
                    <Button
                      className="p-1"
                      style={{ color: "black" }}
                      onClick={() => UpdateChange(index)}
                    >
                     
                      <RxUpdate />
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <span className="text-success">{constMessage}</span>
        )}
      </div>
    </>
  );
};

export default Show;
