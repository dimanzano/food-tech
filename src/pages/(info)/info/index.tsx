import { Box, Button, TextField, Typography } from "@mui/material";
import UpperBarSection from "../../../components/info/UpperBarSection";
import TuneIcon from "@mui/icons-material/Tune";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Footer from "../../../components/info/Footer";
import { useIsMobile } from "../../../hooks/useIsMobile";

export default function InfoPage() {
  const isMobile = useIsMobile();

  return (
    <Box>
      <UpperBarSection />
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: isMobile ? "100%" : "70%",
            padding: "60px",
            marginTop: "60px",
          }}
        >
          <img src="/src/assets/images/beef.png" alt="beef" width="100%" />
        </Box>

        <Box sx={{ width: isMobile ? "100%" : "50%", padding: "40px" }}>
          <Typography variant="h4">Hello! Welcome to FoodTech!</Typography>
          <Typography marginBottom={5}>We're thrilled to have you on board. </Typography>

          <Box flexDirection={"row"} gap={1.5} display={"flex"}>
            <Button variant="contained" color="success">
              Get Started
            </Button>
            <Button variant="outlined" color="success">
              Sign Up
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Landscape Page Sections */}
      <Box
        id="about-us"
        sx={{
          p: 4,
          backgroundColor: "grey.300",
          textAlign: "center",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4">About Us</Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {/* Column 1 */}
          <Box sx={{ textAlign: "center", padding: "20px" }}>
            <TuneIcon sx={{ fontSize: 80 }} color="success" />
            <Typography variant="h6">Here for you</Typography>
            <Typography variant="body1">
            Adjust your preferences, explore new flavors,
            and tailor your meals to reflect your unique tastes{" "}
            </Typography>
          </Box>

          {/* Column 2 */}
          <Box sx={{ textAlign: "center", padding: "20px" }}>
            <FastfoodIcon sx={{ fontSize: 80 }} />
            <Typography variant="h6">Food Habits</Typography>
            <Typography variant="body1">
            Our detailed descriptions and ingredient insights empower you 
            to know exactly what you're indulging in. 
            We believe that informed choices lead to a 
            healthier relationship with food.{" "}
            </Typography>
          </Box>

          {/* Column 3 */}
          <Box sx={{ textAlign: "center", padding: "20px" }}>
            <FavoriteIcon sx={{ fontSize: 80 }} color="error" />
            <Typography variant="h6">Community</Typography>
            <Typography variant="body1">
              We're not just about meals; we're about building 
              a community that celebrates good food and healthy
              living. Together, we can create a culture of mindful eating{" "}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        id="how-it-works"
        sx={{
          p: 4,
          backgroundColor: "grey.200",
          paddingX: isMobile ? "20px" : "80px",
        }}
      >
        <Box textAlign="center" marginBottom={2}>
          <Typography variant="h4">How It Works</Typography>
        </Box>

        <Typography variant="body2">
        Before we dive into the delectable world of personalized recommendations,
         we have a quick treat for you! Complete two fun and insightful tests that 
         explore your food preferences and tastes. These tests will help us understand your palate better,
         ensuring that every recommendation is a delightful match for your unique cravings.
        </Typography>

        <Box>
          <Typography>
            <ul>
              <li>Bullet point 1</li>
              <li>Bullet point 2</li>
              <li>Bullet point 3</li>
            </ul>
          </Typography>
        </Box>

        <Typography variant="body2">
        If you ever have any concerns, 
        questions, or simply want to share your thoughts, don't hesitate to reach out. 
        </Typography>
      </Box>

      <Box
        id="contact"
        sx={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}
      >
        <Box
          sx={{
            width: isMobile ? "100%" : "35%",
            backgroundColor: "rgb(202, 65, 56)",
          }}
        >
          <Typography
            variant="h2"
            margin={4}
            color={"white"}
            fontWeight={"bold"}
          >
          Your satisfaction is our priority!
          </Typography>
        </Box>

        {/* Form Section */}
        <Box
          sx={{
            width: isMobile ? "100%" : "35%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 2,
          }}
        >
          <Box
            component="form"
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              "& .MuiTextField-root": {
                m: 1.5,
                width: isMobile ? "90%" : "100%",
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                id="first-name"
                variant="standard"
                label="First Name"
              />
              <TextField id="last-name" variant="standard" label="Last Name" />
              <TextField id="email" variant="standard" label="Email" />
              <TextField id="phone" variant="standard" label="Phone" />
            </Box>
          </Box>
          <Box m={1.5}>
            <TextField
              id="message"
              label="Message"
              multiline
              rows={6}
              sx={{ width: "100%" }}
            />
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
