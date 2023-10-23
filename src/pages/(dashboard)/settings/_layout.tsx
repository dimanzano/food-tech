import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { useRouteMatch } from "../../../hooks/useRouteMatch";

const TABS = [
  { link: "", label: "Subscriptions" },
  { link: "invoice", label: "Invoice" },
  { link: "user", label: "User Management" },
];

export default function SettingsDetailPage() {
  const routeMatch = useRouteMatch(
    TABS.map(({ link }) => link),
    "/settings/"
  );

  const currentTab = routeMatch?.pattern?.path?.split("/").slice(-1)[0];
  return (
    <Container>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4" fontWeight={900} mb={1}>
          Settings
        </Typography>
      </Box>
      <Tabs
        variant="fullWidth"
        value={currentTab}
        sx={{ mb: 2, borderBottom: 1, borderColor: "grey.200" }}
      >
        {TABS.map((tab) => (
          <Tab
            key={tab.link}
            label={tab.label}
            value={tab.link}
            component={Link}
            to={tab.link}
            replace
          />
        ))}
      </Tabs>
      <Outlet />
    </Container>
  );
}
