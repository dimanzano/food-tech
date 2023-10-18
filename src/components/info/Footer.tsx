import { Box, Link } from "@mui/material";
import { FoodTechLogo } from "../FoodTechLogo";
import { EmailOutlined, LinkedIn } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        backgroundColor: "rgb(0, 0, 34)",
      }}
    >
      <FoodTechLogo fill={"white"} />

      {/* Links */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Link href="#" sx={{ mx: 2 }}>
          Home
        </Link>

        <Link href="#" sx={{ mx: 2 }}>
          About
        </Link>

        <Link href="#" sx={{ mx: 2 }}>
          Contact
        </Link>

        <Link href="#" sx={{ mx: 2 }}>
          Terms
        </Link>

        <Link href="#" sx={{ mx: 2 }}>
          Privacy
        </Link>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "right" }}>
        <LinkedIn htmlColor="white" sx={{ mx: 1 }} />
        <EmailOutlined htmlColor="white" sx={{ mx: 1 }} />
      </Box>
    </Box>
  );
}
