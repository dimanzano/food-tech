import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { FoodTechLogo } from '../FoodTechLogo';
import { HashLink as Link } from 'react-router-hash-link';


export default function UpperBarSection() {
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
                <FoodTechLogo /> 
            </Box>
            <Box flexGrow={1} />

            <Box flexGrow={8} display="flex" justifyContent="center" alignItems="center" gap={2}>
              <Link smooth to="#about-us">About Us</Link>
              <Link smooth to="#how-it-works">How It Works</Link>
              <Link smooth to="#contact">Contact</Link>
            </Box>

            <Box flexDirection={'row'} gap={1.5} display={'flex'}>
            <Button variant='outlined'>
              Login
            </Button> 
            <Button variant="contained">
                Sign Up
            </Button>
            </Box>
            </Toolbar>
        </AppBar>
      </Box>
  );
}