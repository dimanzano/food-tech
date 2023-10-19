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

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

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
        Signup
      </Typography>

      <TextField fullWidth id="email" label="Email" variant="outlined" />

      <TextField
        type={showPassword ? "text" : "password"}
        label="Create password"
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
      <TextField
        type={showPassword1 ? "text" : "password"}
        label="Confirm password"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword1(!showPassword1)}>
                {showPassword1 ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button fullWidth variant="contained">
        Signup
      </Button>
      <Typography variant="subtitle2">
        Already have an account? Login
      </Typography>

      <Divider />

      <Button
        startIcon={<GoogleIcon />}
        variant="outlined"
        color="primary"
        sx={{ width: 230 }}
      >
        Login with Google
      </Button>
    </Box>
  );
}
