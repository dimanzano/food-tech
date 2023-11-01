import { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Grid,
  IconButton,
  Tabs,
  Tab,
} from "@mui/material";
import { supermarketData } from "../../../mockData";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PinDropIcon from "@mui/icons-material/PinDrop";
import StarIcon from "@mui/icons-material/Star";
import ListIcon from "@mui/icons-material/List";
import InsightsIcon from "@mui/icons-material/Insights";

interface Supermarket {
  id: number;
  name: string;
  image: string;
  description: string;
}

export default function SupermarketsPage() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedFood, setSelectedFood] = useState<Supermarket | null>(null);

  const handleOpen = (food: Supermarket) => {
    setSelectedFood(food);
  };

  const handleClose = () => {
    setSelectedFood(null);
  };

  const handleTabChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id)
        : [...prevFavorites, id]
    );
  };

  return (
    <div>
      <Typography variant="h4">Supermarkets</Typography>

      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        variant="fullWidth"
        aria-label="restaurant tabs"
      >
        <Tab
          icon={<InsightsIcon />}
          iconPosition="start"
          label="Based on Tests"
        />
        <Tab icon={<PinDropIcon />} iconPosition="start" label="Nearby" />
        <Tab icon={<StarIcon />} iconPosition="start" label="Best Sellers" />
        <Tab icon={<ListIcon />} iconPosition="start" label="All" />
      </Tabs>

      <Grid container spacing={3} marginTop={1}>
        {supermarketData.map((food) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={food.id}>
            <Card sx={{ position: "relative", maxWidth: 300, height: 330 }}>
              <IconButton
                aria-label="add to favorites"
                onClick={() => toggleFavorite(food.id)}
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  color: favorites.includes(food.id) ? "red" : "gray",
                }}
              >
                {favorites.includes(food.id) ? (
                  <FavoriteIcon />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </IconButton>
              <CardMedia
                component="img"
                height="250"
                image={food.image}
                alt={food.name}
                onClick={() => handleOpen(food)}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {food.name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="div"
                  color="text.secondary"
                >
                  {food.rating}/10 rating
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={!!selectedFood}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>{selectedFood?.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>{selectedFood?.description}</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
