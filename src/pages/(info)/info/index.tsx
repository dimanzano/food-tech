import { Box, Button, Typography } from "@mui/material";
import UpperBarSection from "../../../components/info/UpperBarSection";

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

        {/* Text */}
        <Box sx={{ width: "50%", padding: "40px" }}>
          <Typography variant="h4">Lorem ipsum dolor</Typography>
          <Typography marginBottom={5}>Lorem ipsum</Typography>

          <Box flexDirection={"row"} gap={1.5} display={"flex"}>
            <Button variant="outlined">Login</Button>
            <Button variant="contained">Sign Up</Button>
          </Box>
        </Box>
      </Box>

      {/* Landscape Page Sections */}
      <Box id="about-us" sx={{ p: 4, backgroundColor: "grey.300" }}>
        <Typography variant="h4">About Us</Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ipsam?
          m dolor sit amet consectetur adipisicing elit. Quos, ipsam? m dolor
          sit amet consectetur adipisicing elit. Quos, ipsam? m dolor sit amet
          consectetur adipisicing elit. Quos, ipsam? m dolor sit amet
          consectetur adipisicing elit. Quos, ipsam? m dolor sit amet
          consectetur adipisicing elit. Quos, ipsam? m dolor sit amet
          consectetur adipisicing elit. Quos, ipsam? m dolor sit amet
          consectetur adipisicing elit. Quos, ipsam? m dolor sit amet
          consectetur adipisicing elit. Quos, ipsam? m dolor sit amet
          consectetur adipisicing elit. Quos, ipsam? m dolor sit amet
          consectetur adipisicing elit. Quos, ipsam? m dolor sit amet
          consectetur adipisicing elit. Quos, ipsam? m dolor sit amet
          consectetur adipisicing elit. Quos, ipsam? m dolor sit amet m dolor
          sit amet consectetur adipisicing elit. Quos, ipsam? m dolor sit amet
          consectetur adipisicing elit. Quos, ipsam? m dolor sit amet
          consectetur adipisicing elit. Quos, ipsam? m dolor sit amet
          consectetur adipisicing elit. Quos, ipsam? m dolor sit amet
          consectetur adipisicing elit. Quos, ipsam? m dolor sit amet
          consectetur adipisicing elit. Quos, ipsam? m dolor sit amet
          consectetur adipisicing elit. Quos, ipsam? m dolor sit amet
          consectetur adipisicing elit. Quos, ipsam? m dolor sit amet
          consectetur adipisicing elit. Quos, ipsam? m dolor sit amet
          consectetur adipisicing elit. Quos, ipsam? m dolor sit amet
          consectetur adipisicing elit. Quos, ipsam? m dolor sit amet
          consectetur adipisicing elit. Quos, ipsam? m dolor sit amet
          consectetur adipisicing elit. Quos, ipsam? m dolor sit amet
          consectetur adipisicing elit. Quos, ipsam? m dolor sit amet
          consectetur adipisicing elit. Quos, ipsam? m dolor sit amet
          consectetur adipisicing elit. Quos, ipsam? m dolor sit amet
          consectetur adipisicing elit. Quos, ipsam? consectetur adipisicing
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
          adipisicing elit. Quos, ipsam?
        </Typography>
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
