import React, { useState } from "react";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";
const Login = ({ onLog }) => {
  const [signUp, setSignup] = useState(false);
  const navigate = useNavigate();
  const [pageName, setPageName] = useState("Log In");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");

  
  const handleSignup = () => {
    if (pass.trim() !== cpass.trim()) {
      return;
    }

    const use = {
      user,
      pass,
    };

    const AllUser = JSON.parse(localStorage.getItem("user")) || [];
    AllUser.push(use);
    localStorage.setItem("user", JSON.stringify(AllUser));
    setUser("");
    setPass("");
    setCpass("");
    setSignup(false);
    setPageName("Log In");
  };

  const handleLog = () => {
    const usersData = JSON.parse(localStorage.getItem("user"));
    const data = usersData.find((item) => item.user === user);
    if (data && data.pass === pass) {
      alert("Congratulations! You are logged in.");
      onLog(true);
      navigate("/todo");
    } else {
      alert("Wrong username or password.");
      setUser("");
      setPass("");
      setCpass("");
      setPageName("Sign Up");
      setSignup(true);
    }
  };

  return (
    <>
      <div className="container">
        <div className="card mt-3">
          <div className="card-header">
            <div className="text-center">
              <h3>{pageName}</h3>
              {/* {
  !signUp && (
    <div>
      <p className="text-danger">You can clone after login from GIT</p>
      <br />
      Username: <strong> g </strong>
      Password: <strong> a </strong>
      <br />
      <p className="text-warning">To check signup, simply type wrong credentials</p>
    </div>
  )
} */}




             
            </div>
          </div>
          <div className="card-body">
            {signUp ? (
              <SignUp
                usr={user}
                pss={pass}
                cpss={cpass}
                onUsr={(e) => setUser(e.target.value)}
                onPss={(e) => setPass(e.target.value)}
                onCpass={(e) => setCpass(e.target.value)}
                onSignup={handleSignup}
              />
            ) : (
              <LoginPage
                onLogIn={handleLog}
                usr={user}
                pss={pass}
                onUsr={(e) => setUser(e.target.value)}
                onPss={(e) => setPass(e.target.value)}
                onSign={()=>setSignup(true)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
