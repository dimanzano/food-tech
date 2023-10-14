import { Card, CardContent, Typography, Slider, CardMedia } from '@mui/material';

export default function Food1() {
  return (
    <Card sx={{ width: 650 , height: 400, padding:7 }}
    style={{ backgroundColor: "khaki" }}
    >
      <CardMedia
        component="img"
        height="200"
        image='/src/assets/images/image.png' 
        alt="food"
      />
      <CardContent>
        <Typography variant="h6" component="div">
          Title
        </Typography>
        <Slider
          defaultValue={30}
          step={10}
          marks
          min={10}
          max={100}
          valueLabelDisplay="on" 
        />
      </CardContent>
    </Card>
  );
}