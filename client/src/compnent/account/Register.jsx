import React, { useState } from "react";
import { Link } from 'react-router-dom';
import login from "./login.css";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
} from "@mui/material";
import axios from "axios";
function Register() {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    // try {
    //     const response = await axios.post('YOUR_SIGNUP_API_URL', {
    //         name,
    //         username,
    //         password
    //     });
    //     console.log(response.data);
    // } catch (error) {
    //     console.error(error);
    // }
    navigate('/Login1'); 
  };
  
  return (
    <div className="main">
      <div className="abc">
        <Typography
          variant="h2"
          style={{ textAlign: "center", marginBottom: "20px" }}
        >
          Blog
        </Typography>
        <form>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Name"
            />
          </div>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              variant="standard"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              label="Username"
              autoComplete="username"
            />
          </div>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              variant="standard"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </div>
          <Button
            style={{ width: "100%", textTransform: "none",background:"black" }}
            variant="contained"
            onClick={handleSignup}
          >
            SignUp
          </Button>
          <Typography style={{ textAlign: "center", margin: "5px" }}>
            OR
          </Typography>
        
          <Button style={{ width: "100%", textTransform:"none",color:"black" }} variant="text">
          <Link to="/Login1">Already Have an Account</Link>
          </Button>
        </form>
     
      </div>
    </div>
  );
}

export default Register;
