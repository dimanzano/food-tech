import {
    Card,
    CardContent,
    Typography,
    Slider,
    CardMedia,
  } from "@mui/material";
  
  export default function Food4() {
    return (
      <Card
        sx={{ width: 650, height: 400, padding: 7 }}
        style={{ backgroundColor: "rgb(255,179,108)" }}
      >
        <CardMedia
          component="img"
          height="200"
          image="/src/assets/images/Img4.jpg"
          alt="food"
        />
        <CardContent>
          <Typography variant="h4" component="div" color="White" align='center'>
            SALTY FOOD
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