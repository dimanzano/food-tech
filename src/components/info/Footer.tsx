import { Box, Link } from "@mui/material";
import { FoodTechLogo } from "../FoodTechLogo";
import { EmailOutlined, LinkedIn } from "@mui/icons-material";
import { useIsMobile } from "../../hooks/useIsMobile";

export default function Footer() {
  const isMobile = useIsMobile();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
        backgroundColor: "rgb(0, 0, 34)",
        textAlign: isMobile ? "center" : "initial",
      }}
    >
      <FoodTechLogo fill={"white"} />

      {/* Links */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          mt: isMobile ? 2 : 0,
        }}
      >
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

      <Box
        sx={{ display: "flex", justifyContent: "center", mt: isMobile ? 2 : 0 }}
      >
        <LinkedIn htmlColor="white" sx={{ mx: 1 }} />
        <EmailOutlined htmlColor="white" sx={{ mx: 1 }} />
      </Box>
    </Box>
  );
}
