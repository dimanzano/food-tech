import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Typography,
} from "@mui/material";
import ArrowCircleDownRoundedIcon from "@mui/icons-material/ArrowCircleDownRounded";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import { useState } from "react";

export default function NotificationSection() {
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
              Notifications
            </Typography>
          </Box>
          <Typography variant="subtitle2" color={"gray"}>
            FoodTech will you Notifications
          </Typography>
          <Divider />
          {isFormVisible && (
            <>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Daily Notifications"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="New restaurants added"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="New foods added"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="New features launched"
              />

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
