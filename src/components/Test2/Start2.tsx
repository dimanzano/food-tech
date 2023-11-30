import { Card, CardContent, Typography } from "@mui/material";
import { useIsMobile } from "../../hooks";

export default function Start2() {
  const isMobile = useIsMobile();
  const cardWidth = isMobile ? 300 : 650;
  const textVariant = isMobile ? "subtitle2" : "h6";

  return (
    <Card
      sx={{ width: cardWidth, height: 400, padding: 3 }}
      style={{ backgroundColor: "rgb(240,240,240)" }}
    >
      <CardContent>
        <Typography variant={textVariant} gutterBottom>
          2) We will introduce you to food quality assessment techniques, and
          you will be asked to provide a rating from 10 to 100 based on what you
          consider to be most important when consuming or purchasing food at
          that moment.
        </Typography>
        <Typography variant={textVariant} gutterBottom margin={2}>
          Where 10 indicates that the factor is not relevant to you at all, and
          100 indicates that the factor is highly important to you
        </Typography>
      </CardContent>
    </Card>
  );
}
