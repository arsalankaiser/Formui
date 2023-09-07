import React, { useState } from "react";
import { Link } from 'react-router-dom';
import login from "./login.css";
import {
  TextField,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import axios from "axios";
function Login1() {
  const [email, setEmail] = useState("");
  const [newEmail, setNewemail] = useState("");
  const [password, setPassword] = useState("");
  const [openForgotPassword, setOpenForgotPassword] = useState(false);
  const handleLogin = async () => {
    // try{
    //     const response = await axios.post(``,{
    //         email,
    //         password
    //     });
    //     console.log(response.data);
    // } catch(error){
    //     console.error(error);
    // }
  };
  const handleForgotPassword = () => {
    setOpenForgotPassword(true);
  };

  const handleCloseForgotPassword = () => {
    setOpenForgotPassword(false);
  };

  const handleSendResetLink = async () => {
    // try {
    //   const response = await axios.post("", {
    //     email: email,
    //   });

    //   if (response.status === 200) {
    //     console.log("Password reset link sent successfully!");
    //   } else {
    //     console.log("Failed to send reset link");
    //   }
    // } catch (error) {
    //   console.error("Error sending reset link:", error);
    // }
    // handleCloseForgotPassword();
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
              label="Email"
            />
          </div>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              variant="standard"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              label="Password"
              type="password"
            />
          </div>
          <Button
            style={{ width: "100%", textTransform: "none",background:"black" }}
            variant="contained"
            onClick={handleLogin}
          >
            Login
          </Button>
          <Typography style={{ textAlign: "center", margin: "5px" }}>
            OR
          </Typography>
          <Button
            style={{ width: "100%", textTransform: "none",color:"black" }}
            variant="text"
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </Button>
          <Button
            style={{ width: "100%", textTransform: "none" }}
            variant="text"
          >
         <Link to="/register">Create Your Account</Link>
          </Button>
        </form>
        <Dialog open={openForgotPassword} onClose={handleCloseForgotPassword}>
          <DialogTitle style={{backgroundColor:"#ccc"}}>Forgot Password</DialogTitle>
          <DialogContent style={{backgroundColor:"#ccc"}}>
            <TextField
              fullWidth
              variant="standard"
              label="Enter your email"
              value={newEmail}
              onChange={(e) => setNewemail(e.target.value)}
            />
          </DialogContent>
          <DialogActions style={{backgroundColor:"#ccc"}}>
            <Button onClick={handleCloseForgotPassword} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSendResetLink} color="primary">
            <Link to="/OtpForm">Sent Reset Link</Link>
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default Login1;
