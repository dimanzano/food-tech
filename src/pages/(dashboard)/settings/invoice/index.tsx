import { Box, Divider, Typography } from "@mui/material";

export default function SettingsInvoicePage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 4,
        maxWidth: 600,
        margin: "auto",
        backgroundColor: "grey.100",
        gap: 2,
      }}
    >
      <Typography variant="h5" textAlign="center" fontWeight={"bold"}>
        Invoice
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 7,
        }}
      >
        {/* Current Plan Section */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="overline">Current Plan</Typography>
          <Divider />
          <Typography variant="h6" fontWeight={"bold"}>
            Basic Plan
          </Typography>
          <Typography variant="body1"> $9.99/month</Typography>
        </Box>
      </Box>
    </Box>
  );
}
