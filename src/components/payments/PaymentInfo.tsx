import { Box, Button, TextField, Typography } from "@mui/material";

export default function PaymentsInfo() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 2,
        maxWidth: 600,
        margin: "auto",
        gap: 1.5,
      }}
    >
      <Typography variant="overline" fontWeight={"bold"}>
        Payment Information
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
            flexDirection: "row",
            gap: 1,
          }}
        >
          <TextField
            sx={{ width: 350 }}
            variant="standard"
            name="card-num"
            label="Card number"
          />
          <TextField
            sx={{ width: 150 }}
            variant="standard"
            name="expiration-date"
            label="MM/YY"
          />
        </Box>
      </Box>
      <Button variant="contained" color="success">
        Pay $0000
      </Button>
    </Box>
  );
}
