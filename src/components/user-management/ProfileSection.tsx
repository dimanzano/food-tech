import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import ArrowCircleDownRoundedIcon from "@mui/icons-material/ArrowCircleDownRounded";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import { useState } from "react";

export default function ProfileSection() {
  const [isFormVisible, setFormVisible] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 2,
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle1" fontWeight={"bold"}>
              Profile
            </Typography>
          </Box>
          <Typography variant="subtitle2" color={"gray"}>
            Names, Email
          </Typography>
          <Divider />
          {isFormVisible && (
            <>
              <TextField size="small" name="firstName" label="First name" />
              <TextField size="small" name="lastName" label="Last name" />
              <TextField size="small" name="email" label="Email" />

              <Button variant="contained" color="success" sx={{ width: 180 }}>
                Save changes
              </Button>
            </>
          )}
          {isFormVisible ? (
            <ArrowCircleUpRoundedIcon
              style={{
                cursor: "pointer",
                position: "absolute",
                right: 0,
                top: 0,
              }}
              onClick={() => setFormVisible(!isFormVisible)}
              color="success"
            />
          ) : (
            <ArrowCircleDownRoundedIcon
              style={{
                cursor: "pointer",
                position: "absolute",
                right: 0,
                top: 0,
              }}
              onClick={() => setFormVisible(!isFormVisible)}
              color="disabled"
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}
