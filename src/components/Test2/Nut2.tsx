import {
    Card,
    CardContent,
    Typography,
    Slider,
    CardMedia,
  } from "@mui/material";
  
  export default function Nut2() {
    return (
      <Card
        sx={{ width: 650, height: 400, padding: 7 }}
        style={{ backgroundColor: "rgb(136,183,238)" }}
      >
        <CardMedia
          component="img"
          height="200"
          image="/src/assets/images/Img6.jpg"
          alt="food"
        />
        <CardContent>
          <Typography variant="h4" component="div" color="white" align='center'>
            HYGIENE AND STANDARDS
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