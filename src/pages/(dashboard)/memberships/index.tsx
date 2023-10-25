import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

// Mock Data
const plansData = [
  {
    id: 1,
    planName: "Basic Plan",
    price: "$9.99",
    features: ["Feature 1", "Feature 2"],
    Icon: StarIcon,
  },
  {
    id: 2,
    planName: "Pro Plan",
    price: "$19.99",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    Icon: TrendingUpIcon,
  },
  {
    id: 3,
    planName: "Free Plan",
    price: "$0.00",
    features: ["Feature 1"],
    Icon: VerifiedUserIcon,
  },
];

export default function MembershipsPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
      }}
    >
      <Typography variant="h5" fontWeight={"bold"}>
        Membership Plans
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 3,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {plansData.map((plan) => (
          <Card
            key={plan.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              minWidth: 275,
              maxWidth: 300,
              padding: 3,
              marginBottom: 2,
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <plan.Icon sx={{ fontSize: 80 }} />
                <Typography variant="h5" component="div">
                  {plan.planName}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Typography variant="subtitle2">{plan.price}/month</Typography>
              </Box>
              {plan.features.map((feature, index) => (
                <Typography variant="body2" color="text.secondary" key={index}>
                  -{feature}
                </Typography>
              ))}
            </CardContent>
            <Box sx={{ flex: 1 }} />
            <CardActions>
              <Button size="small" variant="outlined">
                View Plan
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
