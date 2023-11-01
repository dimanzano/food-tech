import { Card, CardContent, Typography } from "@mui/material";

export default function Start2() {
  return (
    <Card 
      sx={{ width: 650, height: 400, padding: 7 }}
      style={{ backgroundColor: "rgb(240,240,240)" }}>
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          sx={{ whiteSpace: "pre-wrap" }}
          margin={2}>
          2) We will introduce you to food quality assessment techniques, and you will be asked to provide a rating
          from 10 to 100 based on what you consider to be most important when consuming or purchasing food at that moment.
        </Typography>
        <Typography 
          variant="h6" 
          gutterBottom>
          Where 10 indicates that the factor is not relevant to you at all, and 100 indicates that the factor is highly important to you
        </Typography>
      </CardContent>
    </Card>
  );
}
