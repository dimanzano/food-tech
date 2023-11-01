import { Card, CardContent, Typography } from "@mui/material"

export default function Start() {
  return (
    <Card 
      sx={{ width: 650, height: 400, padding: 7 }}
      style={{ backgroundColor: "rgb(240,240,240)" }}>
      <CardContent>
        <Typography
          variant="h4"
          component="div"
          align="center"
          sx={{ whiteSpace: "pre-wrap" }}
        >
          TEST FOOD
        </Typography>
        <Typography
          variant="h6" 
          gutterBottom
          margin={2}>
          The test consists of two stages:
        </Typography>
        <Typography 
          variant="h6" 
          gutterBottom>
          1) In the first stage, we will present you with various types of food, and you will need to rate them on a scale from 1 to 100.
        </Typography>
        <Typography 
          variant="h6" 
          gutterBottom
          margin={2}>
          This test will help us personalize your experience. Rate the food you like the most higher. 
        </Typography>
      </CardContent>
    </Card>
  );
}
