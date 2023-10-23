import { Box, TextField, Typography } from "@mui/material";

export default function BillingInfo() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 2,
        maxWidth: 600,
        margin: "auto",
      }}
    >
      <Typography variant="overline" fontWeight={"bold"}>
        Shipping & Billing Information
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "grey.100",
          p: 3,
          gap: 1.5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
            <TextField
              sx={{ width: 250 }}
              variant="standard"
              name="firstName"
              label="First Name"
            />
            <TextField
              sx={{ width: 250 }}
              variant="standard"
              name="lastName"
              label="Last Name"
            />
          </Box>
          <TextField variant="standard" name="address" label="Address" />
          <TextField variant="standard" name="city" label="City" />

          <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
            <TextField
              sx={{ width: 250 }}
              variant="standard"
              name="state"
              label="State"
            />
            <TextField
              sx={{ width: 250 }}
              variant="standard"
              name="zip"
              label="ZIP"
            />
          </Box>
          <TextField variant="standard" name="country" label="Country" />
        </Box>
      </Box>
    </Box>
  );
}
