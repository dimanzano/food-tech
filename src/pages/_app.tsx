import { Suspense} from "react";
import {
  Outlet,
} from "react-router-dom";
import { CssBaseline, Box } from "@mui/material";


export default function App() {

  return (
    <Suspense>
      <Box>
        <CssBaseline />
            <Outlet />
      </Box>
    </Suspense>
  );
}
