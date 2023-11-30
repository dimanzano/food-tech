import {
  Card,
  CardContent,
  Typography,
  Slider,
  CardMedia,
} from "@mui/material";
import { useIsMobile } from "../../hooks";

export default function Food2() {
  const isMobile = useIsMobile();
  const cardWidth = isMobile ? 300 : 650;
  const variant = isMobile ? "h5" : "h4";

  return (
    <Card
      sx={{ width: cardWidth, height: 400, padding: 7 }}
      style={{ backgroundColor: "rgb(152,94,180)" }}
    >
      <CardMedia
        component="img"
        height="200"
        image="/src/assets/images/Img2.jpg"
        alt="food"
      />
      <CardContent>
        <Typography
          variant={variant}
          component="div"
          color="White"
          align="center"
        >
          SWEET FOOD
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
