import { Box, Button, Divider, Typography } from "@mui/material";
import ArrowCircleDownRoundedIcon from "@mui/icons-material/ArrowCircleDownRounded";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import { useState } from "react";

export default function DeactivateSection() {
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
              Deactivate account
            </Typography>
          </Box>
          <Typography variant="subtitle2" color={"gray"}>
            If yo no longer want to be part of FoodTech.
          </Typography>
          <Divider />
          {isFormVisible && (
            <>
              <Button variant="contained" color="error" sx={{ width: 140 }}>
                Deactivate
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
