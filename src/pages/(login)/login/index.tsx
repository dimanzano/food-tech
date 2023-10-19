import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 3,
        border: "1px solid",
        borderColor: "grey.500",
        borderRadius: 1.5,
        width: 350,
        margin: "0 auto",
        gap: 1.5,
        marginTop: 6,
      }}
    >
      <Typography variant="h5" fontWeight={"bold"}>
        Login
      </Typography>

      <TextField fullWidth id="email" label="Email" variant="outlined" />

      <TextField
        type={showPassword ? "text" : "password"}
        label="Password"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button>Forgot Password?</Button>

      <Button fullWidth variant="contained">
        Login
      </Button>
      <Typography variant="subtitle2">Don't have an account? Signup</Typography>

      <Divider />

      <Button
        startIcon={<GoogleIcon />}
        variant="contained"
        color="primary"
        sx={{ width: 230 }}
      >
        Login with Google
      </Button>
    </Box>
  );
}
