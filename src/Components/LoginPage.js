import React from "react";
import { Button } from "react-bootstrap";
const LoginPage = ({ onLogIn, usr, pss, onUsr, onPss }) => {
  const handleLog = (e) => {
    e.preventDefault();
    onLogIn();
  };
  return (
    <>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <form onSubmit={handleLog}>
            <div className="form-group p-2">
              <label>username</label>
              <input
                type="text"
                name="user"
                value={usr}
                onChange={onUsr}
                className="form-control"
              />
            </div>
            <div className="form-group p-2">
              <label>password</label>
              <input
                type="password"
                name="password"
                value={pss}
                onChange={onPss}
                className="form-control"
              />
            </div>

            <div className="text-center mt-2">
              <Button type="submit">Log In</Button>
            </div>
          </form>
        </div>
        <div className="col-4"></div>
      </div>
    </>
  );
};

export default LoginPage;
