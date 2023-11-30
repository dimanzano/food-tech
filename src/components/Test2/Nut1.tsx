import {
  Card,
  CardContent,
  Typography,
  Slider,
  CardMedia,
} from "@mui/material";
import { useIsMobile } from "../../hooks";

export default function Nut1() {
  const isMobile = useIsMobile();
  const cardWidth = isMobile ? 300 : 650;
  const variant = isMobile ? "h5" : "h4";

  return (
    <Card
      sx={{ width: cardWidth, height: 400, padding: 7 }}
      style={{ backgroundColor: "rgb(136,238,188)" }}
    >
      <CardMedia
        component="img"
        height="200"
        image="/src/assets/images/Img5.jpg"
        alt="food"
      />
      <CardContent>
        <Typography
          variant={variant}
          component="div"
          color="white"
          align="center"
        >
          NUTRITION LABELING
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
