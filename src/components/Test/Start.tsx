import { Card, CardContent, Typography } from "@mui/material";

export default function Start() {
  return (
    <Card sx={{ width: 650 , height: 400, padding:7}} >
      <CardContent>
        <Typography variant="h5" component="div" sx={{ whiteSpace: 'pre-wrap' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at augue
          vel ex placerat tempor et non turpis. Duis pulvinar elit et lectus pretium
          sollicitudin.  Fusce at augue vel ex placerat tempor et non turpis.
        </Typography>
      </CardContent>
    </Card>
  );
}