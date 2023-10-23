import { Box, Button, Divider, Typography } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import AddIcon from "@mui/icons-material/Add";

export default function SettingsPage() {
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
        Subscriptions
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

          <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
            <Button sx={{ mr: 1 }} variant="contained">
              Upgrade Plan
            </Button>
            <Button variant="outlined">Cancel Plan</Button>
          </Box>

          <Typography variant="subtitle2">
            Your plan renews on October 1, 2021
          </Typography>
        </Box>

        {/* Payment Method Section */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="overline">Payment Method</Typography>
          <Divider />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <PaymentIcon sx={{ mr: 1 }} />

            <Typography>•••• 1234</Typography>

            <Typography variant="subtitle2" sx={{ ml: "auto" }}>
              Expires 04/2022
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "left" }}>
            <Button startIcon={<AddIcon />} variant="text" size="small">
              Add payment method
            </Button>
          </Box>
        </Box>

        {/* Billing History Section */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="overline">Billing History</Typography>
          <Divider />

          {/* List billing history */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography>May 5, 2022 - $9.99</Typography>
            <Typography>April 5, 2022 - $9.99</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
