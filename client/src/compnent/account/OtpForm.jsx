import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function OtpForm() {
  const [otp, setOTP] = useState("");
  const [verificationStatus, setVerificationStatus] = useState("");
  const [newPassword, setNewassword] = useState("");
  const [Confirmpassword, setConfirmassword] = useState("");

  const navigate = useNavigate();
  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post("/api/verify-otp", {
        otp,
      });

      if (response.data.success) {
        setVerificationStatus("OTP verified successfully!");
        alert("Password Change Sucessfully")
      } else {
        setVerificationStatus("Invalid OTP");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setVerificationStatus("An error occurred");
    }
    navigate('/Login1'); 
  };

  return (
    <div className="main">
      <div className="abc">
        <Typography variant="h2" style={{ textAlign: "center", marginBottom: "20px" }}>
          Verify OTP
        </Typography>
        <form>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              variant="standard"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              label="Enter OTP"
            />
          </div>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              variant="standard"
              value={newPassword}
              onChange={(e) => setNewassword(e.target.value)}
              label="New Password"
            />
          </div>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              variant="standard"
              value={Confirmpassword}
              onChange={(e) => setConfirmassword(e.target.value)}
              label="Confirm Password"
            />
          </div>
          <Button style={{ width: "100%", textTransform: "none",backgroundColor:"black" }} variant="contained" onClick={handleVerifyOTP}>
            Verify OTP
          </Button>
          <Typography style={{ textAlign: "center", margin: "10px" }}>{verificationStatus}</Typography>
        </form>
      </div>
    </div>
  );
}

export default OtpForm;
