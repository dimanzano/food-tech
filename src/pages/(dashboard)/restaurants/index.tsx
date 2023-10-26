import { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  Grid,
  Tabs,
  Tab,
  IconButton,
  Box,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { restaurantData } from "../../../mockData";

interface Restaurant {
  id: number;
  name: string;
  image: string;
  description: string;
  specialties: string[];
  address: string;
}

export default function RestaurantsPage() {
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null);
  const [selectedTab, setSelectedTab] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);

  const handleOpen = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const handleClose = () => {
    setSelectedRestaurant(null);
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
    <>
      <Typography variant="h4">Restaurants</Typography>

      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        variant="fullWidth"
        aria-label="restaurant tabs"
      >
        <Tab label="Nearby" />
        <Tab label="Based on Tests" />
        <Tab label="Best Sellers" />
        <Tab label="All" />
      </Tabs>

      <Grid container spacing={3} marginTop={1}>
        {restaurantData.map((restaurant) => (
          <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
            <Card sx={{ position: "relative" }}>
              <IconButton
                aria-label="add to favorites"
                onClick={() => toggleFavorite(restaurant.id)}
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  color: favorites.includes(restaurant.id) ? "red" : "gray",
                }}
              >
                {favorites.includes(restaurant.id) ? (
                  <FavoriteIcon />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </IconButton>
              <CardMedia
                component="img"
                height="140"
                image={restaurant.image}
                alt={restaurant.name}
                onClick={() => handleOpen(restaurant)}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {restaurant.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {restaurant.specialties.join(", ")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={!!selectedRestaurant}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {selectedRestaurant && (
          <>
            <Box
              sx={{
                p: 3,
                maxWidth: { xs: "90%", sm: 500 },
                margin: "auto",
              }}
            >
              <Typography
                id="alert-dialog-title"
                variant="h5"
                sx={{
                  mb: 1,
                  textAlign: "center",
                }}
              >
                {selectedRestaurant.name}
              </Typography>

              <Typography paragraph>
                {selectedRestaurant.description}
              </Typography>

              <Typography variant="h6" sx={{ mb: 1 }}>
                Specialties
              </Typography>

              <ul>
                {selectedRestaurant.specialties.map((specialty, index) => (
                  <li key={index}>{specialty}</li>
                ))}
              </ul>

              <Typography
                color="text.secondary"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <LocationOnIcon sx={{ mr: 0.5 }} />

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${selectedRestaurant.address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {selectedRestaurant.address}
                </a>
              </Typography>
            </Box>
          </>
        )}
      </Dialog>
    </>
  );
}
