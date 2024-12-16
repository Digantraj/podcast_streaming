import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Divider,
  Typography,
  Box,
} from "@mui/material";
import { Google } from "@mui/icons-material";

function Login({ isLogin, handleLogin }) {
  return (
    <>
      {isLogin && (
        <Dialog
          open={isLogin}
          onClose={handleLogin}
          fullWidth
          maxWidth="xs"
          sx={{
            "& .MuiPaper-root": {
              borderRadius: "16px",
              padding: "16px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            },
          }}
        >
          <DialogTitle>
            <Typography
              variant="h5"
              align="center"
              color="#F9A826"
              fontWeight="bold"
            >
              Sign in to access your account
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<Google />}
              sx={{
                color: "#424242",
                borderColor: "#d3d3d3",
                backgroundColor: "#f9f9f9",
                py: 1,
                mb: 2,
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#e8f4ff",
                  borderColor: "#1976d2",
                  color: "#1976d2",
                },
              }}
            >
              Sign in with Google
            </Button>
            <Divider sx={{ mb: 1 }}>or</Divider>
            <TextField
              label="Email Address"
              type="email"
              fullWidth
              variant="outlined"
              margin="dense"
              InputProps={{
                sx: {
                  borderRadius: "10px",
                },
              }}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              margin="dense"
              InputProps={{
                sx: {
                  borderRadius: "10px",
                },
              }}
            />
            <Typography
              variant="body2"
              align="right"
              sx={{
                mt: 1,
                mb: 1,
                color: "#1976d2",
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
              onClick={() => alert("Forgot password clicked!")}
            >
              Forgot Password?
            </Typography>
          </DialogContent>
          <DialogActions sx={{ flexDirection: "column", px: 3, pb: 2 }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#1976d2",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: "8px",
                py: 1,
                mb: 2,
                "&:hover": { backgroundColor: "#145a9f" },
              }}
            >
              Sign In
            </Button>
            <Typography variant="body2" align="center">
              Don’t have an account?{" "}
              <Typography
                component="span"
                sx={{
                  color: "#1976d2",
                  fontWeight: "bold",
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" },
                }}
                onClick={() => alert("Create Account clicked!")}
              >
                Create Account
              </Typography>
            </Typography>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}

export default Login;
