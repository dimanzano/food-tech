import { Card, CardContent, Typography } from "@mui/material";
import { useIsMobile } from "../../hooks";

export default function Start() {
  const isMobile = useIsMobile();
  const cardWidth = isMobile ? 300 : 650;
  const headerVariant = isMobile ? "h4" : "h6";
  const textVariant = isMobile ? "subtitle2" : "h6";

  return (
    <Card
      sx={{ width: cardWidth, height: 400, padding: 3 }}
      style={{ backgroundColor: "rgb(240,240,240)" }}
    >
      <CardContent>
        <Typography
          variant={headerVariant}
          component="div"
          align="center"
          sx={{ whiteSpace: "pre-wrap" }}
        >
          TEST FOOD
        </Typography>
        <Typography variant={textVariant} gutterBottom margin={2}>
          The test consists of two stages:
        </Typography>
        <Typography variant={textVariant} gutterBottom>
          1) In the first stage, we will present you with various types of food,
          and you will need to rate them on a scale from 1 to 100.
        </Typography>
        <Typography variant={textVariant} gutterBottom margin={2}>
          This test will help us personalize your experience. Rate the food you
          like the most higher.
        </Typography>
      </CardContent>
    </Card>
  );
}
