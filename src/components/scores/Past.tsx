import { Box, Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const foodData = [
  { name: "Spicy", uv: 400, amt: 2400 },
  { name: "Sweet", uv: 350, amt: 2210 },
  { name: "Salty", uv: 200, amt: 2290 },
  { name: "Vegetables", uv: 200, amt: 2000 },
  { name: "Vegetables", uv: 300, amt: 2000 },
  { name: "Vegetables", uv: 270, amt: 2000 },
  { name: "Vegetables", uv: 200, amt: 2000 },
  { name: "Vegetables", uv: 300, amt: 2000 },
  // add more categories...
];

const qualityData = [
  { name: "Nutritional Labeling", uv: 400, amt: 2400 },
  { name: "Hygiene and Safety", uv: 350, amt: 2210 },
  { name: "Organic", uv: 200, amt: 2290 },
  { name: "Sustainability", uv: 200, amt: 2000 },
  { name: "Preference Testing", uv: 300, amt: 2000 },
  // add more categories...
];
export default function PastSection() {
  return (
    <Box marginTop={2} sx={{ height: "50vh", width: "90%" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={foodData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" fill="#89bd79" />
        </BarChart>
      </ResponsiveContainer>

      <Typography variant="h6" fontWeight={"bold"}>
        Food Quality
      </Typography>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={qualityData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" fill="#6a6aab" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}
