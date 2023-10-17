import { Box, Button, Typography } from "@mui/material";
import UpperBarSection from "../../../components/info/UpperBarSection";
import TuneIcon from "@mui/icons-material/Tune";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import FavoriteIcon from "@mui/icons-material/Favorite";

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

      <Box id="how-it-works" sx={{ p: 4, backgroundColor: "grey.200" }}>
        <Typography variant="h4">How It Works</Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ipsam?
          it amet consectetur adipisicing elit. Quos, ipsam? Quos, ipsam? it
          amet consectetur adipisicing elit. Quos, ipsam? Quos, ipsam? it amet
          consectetur adipisicing elit. Quos, ipsam? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quos, ipsam? it amet consectetur
          adipisicing elit. Quos, ipsam? Quos, ipsam? it amet consectetur
          adipisicing elit. Quos, ipsam? Quos, ipsam? it amet consectetur
          adipisicing elit. Quos, ipsam?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quos, ipsam? it amet consectetur adipisicing elit.
          Quos, ipsam? Quos, ipsam? it amet consectetur adipisicing elit. Quos,
          ipsam? Quos, ipsam? it amet consectetur adipisicing elit. Quos,
          ipsam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          ipsam? it amet consectetur adipisicing elit. Quos, ipsam? Quos, ipsam?
          it amet consectetur adipisicing elit. Quos, ipsam? Quos, ipsam? it
          amet consectetur adipisicing elit. Quos, ipsam?Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quos, ipsam? it amet consectetur
          adipisicing elit. Quos, ipsam? Quos, ipsam? it amet consectetur
          adipisicing elit. Quos, ipsam? Quos, ipsam? it amet consectetur
          adipisicing elit. Quos, ipsam?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quos, ipsam? it amet consectetur adipisicing elit.
          Quos, ipsam? Quos, ipsam? it amet consectetur adipisicing elit. Quos,
          ipsam? Quos, ipsam? it amet consectetur adipisicing elit. Quos,
          ipsam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          ipsam? it amet consectetur adipisicing elit. Quos, ipsam? Quos, ipsam?
          it amet consectetur adipisicing elit. Quos, ipsam? Quos, ipsam? it
          amet consectetur adipisicing elit. Quos, ipsam?Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quos, ipsam? it amet consectetur
          adipisicing elit. Quos, ipsam? Quos, ipsam? it amet consectetur
          adipisicing elit. Quos, ipsam? Quos, ipsam? it amet consectetur
          adipisicing elit. Quos, ipsam?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quos, ipsam? it amet consectetur adipisicing elit.
          Quos, ipsam? Quos, ipsam? it amet consectetur adipisicing elit. Quos,
          ipsam? Quos, ipsam? it amet consectetur adipisicing elit. Quos,
          ipsam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          ipsam? it amet consectetur adipisicing elit. Quos, ipsam? Quos, ipsam?
          it amet consectetur adipisicing elit. Quos, ipsam? Quos, ipsam? it
          amet consectetur adipisicing elit. Quos, ipsam?Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quos, ipsam? it amet consectetur
          adipisicing elit. Quos, ipsam? Quos, ipsam? it amet consectetur
          adipisicing elit. Quos, ipsam? Quos, ipsam? it amet consectetur
          adipisicing elit. Quos, ipsam?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quos, ipsam? it amet consectetur adipisicing elit.
          Quos, ipsam? Quos, ipsam? it amet consectetur adipisicing elit. Quos,
          ipsam? Quos, ipsam? it amet consectetur adipisicing elit. Quos,
          ipsam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          ipsam? it amet consectetur adipisicing elit. Quos, ipsam? Quos, ipsam?
          it amet consectetur adipisicing elit. Quos, ipsam? Quos, ipsam? it
          amet consectetur adipisicing elit. Quos, ipsam?Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quos, ipsam? it amet consectetur
          adipisicing elit. Quos, ipsam? Quos, ipsam? it amet consectetur
          adipisicing elit. Quos, ipsam? Quos, ipsam? it amet consectetur
          adipisicing elit. Quos, ipsam?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quos, ipsam? it amet consectetur adipisicing elit.
          Quos, ipsam? Quos, ipsam? it amet consectetur adipisicing elit. Quos,
          ipsam? Quos, ipsam? it amet consectetur adipisicing elit. Quos,
          ipsam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          ipsam? it amet consectetur adipisicing elit. Quos, ipsam? Quos, ipsam?
          it amet consectetur adipisicing elit. Quos, ipsam? Quos, ipsam? it
          amet consectetur adipisicing elit. Quos, ipsam?Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quos, ipsam? it amet consectetur
          adipisicing elit. Quos, ipsam? Quos, ipsam? it amet consectetur
          adipisicing elit. Quos, ipsam? Quos, ipsam? it amet consectetur
          adipisicing elit. Quos, ipsam?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quos, ipsam? it amet consectetur adipisicing elit.
          Quos, ipsam? Quos, ipsam? it amet consectetur adipisicing elit. Quos,
          ipsam? Quos, ipsam? it amet consectetur adipisicing elit. Quos,
          ipsam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          ipsam? it amet consectetur adipisicing elit. Quos, ipsam? Quos, ipsam?
          it amet consectetur adipisicing elit. Quos, ipsam? Quos, ipsam? it
          amet consectetur adipisicing elit. Quos, ipsam?Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quos, ipsam? it amet consectetur
          adipisicing elit. Quos, ipsam? Quos, ipsam? it amet consectetur
          adipisicing elit. Quos, ipsam? Quos, ipsam? it amet consectetur
          adipisicing elit. Quos, ipsam?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quos, ipsam? it amet consectetur adipisicing elit.
          Quos, ipsam? Quos, ipsam? it amet consectetur adipisicing elit. Quos,
          ipsam? Quos, ipsam? it amet consectetur adipisicing elit. Quos,
          ipsam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          ipsam? it amet consectetur adipisicing elit. Quos, ipsam? Quos, ipsam?
          it amet consectetur adipisicing elit. Quos, ipsam? Quos, ipsam? it
          amet consectetur adipisicing elit. Quos, ipsam?
        </Typography>
      </Box>

      <Box id="contact" sx={{ p: 4, backgroundColor: "grey.100" }}>
        <Typography variant="h4">Contact</Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ipsam?
        </Typography>
      </Box>
    </Box>
  );
}
