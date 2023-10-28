import React, { useState } from "react";
import { Typography, Tabs, Tab, Box } from "@mui/material";
import LatestSection from "../../components/scores/Latest";
import PastSection from "../../components/scores/Past";

export default function DashboardPage() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Typography variant="h4">Personalized Food Scores</Typography>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Latest Scores" />
        <Tab label="Past Scores" />
      </Tabs>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {value === 0 && <LatestSection />}
        {value === 1 && <PastSection />}
      </Box>
    </Box>
  );
}
