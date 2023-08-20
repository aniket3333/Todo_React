import React,{useState} from "react";
import Todo from "./Components/Todo";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './Components/Login';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'
const App = () => {
const [logc,setLogc] = useState(false);
const handleonlog= (status) =>{
  
  setLogc(status)
}
  return (
    <>
   
    <Router>
      <Routes>
      
        <Route path='/' element={<Login onLog={handleonlog}/>}/>
        <Route path='/todo' element={logc?(<Todo/>):(<Navigate to='/'/>)} />
      
        
      </Routes>
    </Router>
  
  
  
     
    </>
  );
};

export default App;
