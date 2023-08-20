import React from "react";
import { Button } from "react-bootstrap";
const SignUp = ({ usr, pss, cpss, onUsr, onPss, onCpass, onSignup,onlin }) => {
  const handleSub = (e) => {
    e.preventDefault();
    onSignup();
  };
  const han= (e) =>{
    e.preventDefault()
    onlin()

  }
  return (
    <>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-8">
        
        <div className="row">
        <div className="col-8">
         <form onSubmit={handleSub}>
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
            <div className="form-group p-2">
              <label>confirm password</label>
              <input
                type="password"
                name="cpassword"
                value={cpss}
                onChange={onCpass}
                className="form-control"
              />
            </div>
            <div className="text-center mt-2">
              <Button type="submit">Sign Up</Button>
              <br/>
              <span className="text-warning">Allreday Registred.</span><br/>
              <Button onClick={han}>Log In</Button>

            </div>
          </form>
         </div>
        </div>
        
          
        </div>
        <div className="col-4"></div>
      </div>
    </>
  );
};

export default SignUp;
