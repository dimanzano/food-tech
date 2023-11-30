import {
  AppBar,
  Box,
  Button,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FoodTechLogo } from "../FoodTechLogo";
import { HashLink as Link } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";

export default function UpperBarSection() {
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  function login() {
    navigate("/login");
  }

  function signup() {
    navigate("/signup");
  }

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          border: 0,
          borderBottom: 1,
          borderBottomColor: "grey.300",
          zIndex: 2,
        }}
        color="inherit"
        elevation={0}
        variant="outlined"
      >
        <Toolbar>
          <Box
            sx={{
              height: (t) => t.mixins.toolbar.minHeight,
              boxSizing: "border-box",
              py: 1,
            }}
          >
            <FoodTechLogo fill={""} />
          </Box>
          <Box
            flexGrow={8}
            display={isMobile ? "none" : "flex"}
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <Link smooth to="#about-us">
              About Us
            </Link>
            <Link smooth to="#how-it-works">
              How It Works
            </Link>
            <Link smooth to="#contact">
              Contact
            </Link>
          </Box>
          <Box flexGrow={1} /> {/* This Box will take up any remaining space */}
          <Box flexDirection={"row"} gap={1.5} display={"flex"}>
            <Button variant="outlined" onClick={login}>
              Login
            </Button>
            <Button variant="contained" onClick={signup}>
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
