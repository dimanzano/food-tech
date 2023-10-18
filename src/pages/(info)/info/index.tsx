import { Box, Button, TextField, Typography } from "@mui/material";
import UpperBarSection from "../../../components/info/UpperBarSection";
import TuneIcon from "@mui/icons-material/Tune";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Footer from "../../../components/info/Footer";

export default function InfoPage() {
  return (
    <Box>
      <UpperBarSection />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            width: "50%",
            padding: "60px",
            marginTop: "60px",
          }}
        >
          <img src="/src/assets/images/beef.png" alt="beef" width="100%" />
        </Box>

        <Box sx={{ width: "50%", padding: "40px" }}>
          <Typography variant="h4">Lorem ipsum dolor</Typography>
          <Typography marginBottom={5}>Lorem ipsum</Typography>

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
        sx={{ p: 4, backgroundColor: "grey.300", textAlign: "center" }}
      >
        <Typography variant="h4">About Us</Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {/* Column 1 */}
          <Box sx={{ textAlign: "center", padding: "20px" }}>
            <TuneIcon sx={{ fontSize: 80 }} color="success" />
            <Typography variant="h6">Title 1</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              ipsam? it amet consectetur adipisicing elit.{" "}
            </Typography>
          </Box>

          {/* Column 2 */}
          <Box sx={{ textAlign: "center", padding: "20px" }}>
            <FastfoodIcon sx={{ fontSize: 80 }} />
            <Typography variant="h6">Title 2</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              ipsam? it amet consectetur adipisicing elit.{" "}
            </Typography>
          </Box>

          {/* Column 3 */}
          <Box sx={{ textAlign: "center", padding: "20px" }}>
            <FavoriteIcon sx={{ fontSize: 80 }} color="error" />
            <Typography variant="h6">Title 3</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              ipsam? it amet consectetur adipisicing elit.{" "}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        id="how-it-works"
        sx={{
          p: 4,
          backgroundColor: "grey.200",
          paddingX: "80px",
        }}
      >
        <Box textAlign="center" marginBottom={2}>
          <Typography variant="h4">How It Works</Typography>
        </Box>

        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur. Potenti nunc ultricies
          pharetra fames consequat. Gravida penatibus sagittis fermentum eu
          egestas at id tristique. In phasellus pharetra fames nunc purus diam
          porttitor. Lectus erat in rhoncus parturient proin. Ultrices turpis in
          risus lacus mattis arcu amet in.
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
          Lorem ipsum dolor sit amet consectetur. Potenti nunc ultricies
          pharetra fames consequat. Gravida penatibus sagittis fermentum eu
          egestas at id tristique. In phasellus pharetra fames nunc purus diam
          porttitor. Lectus erat in rhoncus parturient proin. Ultrices turpis in
          risus lacus mattis arcu amet in.
        </Typography>
      </Box>

      <Box id="contact" sx={{ display: "flex" }}>
        <Box sx={{ width: "35%", backgroundColor: "rgb(202, 65, 56)" }}>
          <Typography
            variant="h2"
            margin={4}
            color={"white"}
            fontWeight={"bold"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </Box>

        {/* Form Section */}
        <Box sx={{ width: "50%", p: 3, margin: 5 }} justifyContent={"center"}>
          <Box
            component="form"
            sx={{
              width: "100%",

              "& .MuiTextField-root": { m: 1.5, width: "30ch" },
            }}
          >
            <div>
              <TextField
                id="first-name"
                variant="standard"
                label="First Name"
              />

              <TextField id="last-name" variant="standard" label="Last Name" />

              <TextField id="email" variant="standard" label="Email" />

              <TextField id="phone" variant="standard" label="Phone" />
            </div>
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
