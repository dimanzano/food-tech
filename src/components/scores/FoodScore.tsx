import {
  Box,
  Grid,
  Card,
  CardMedia,
  Typography,
  Pagination,
  CardContent,
} from "@mui/material";
import { supermarketData } from "../../mockData/supermarketData";
import { useState } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";

interface FoodCardProps {
  image: string;
  name: string;
}

const FoodCard: React.FC<FoodCardProps> = ({ image, name }) => {
  return (
    <Card sx={{ maxWidth: 220, height: 180 }}>
      <CardMedia component="img" height="130" image={image} alt={name} />{" "}
      <CardContent>
        <Typography variant="subtitle2">{name}</Typography>
      </CardContent>
    </Card>
  );
};

export default function FoodScore() {
  const isMobile = useIsMobile();
  const [page, setPage] = useState(1);
  const itemsPerPage = isMobile ? 3 : 4;

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const pagedData = supermarketData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box sx={{ overflowX: "auto", whiteSpace: "nowrap" }}>
      <Typography variant="h6" fontWeight={"bold"}>
        Food Ranking
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {pagedData.map((food) => (
          <Grid item xs={isMobile ? 6 : 3} key={food.id}>
            <FoodCard image={food.image} name={food.name} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Pagination
          count={Math.ceil(supermarketData.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
}
