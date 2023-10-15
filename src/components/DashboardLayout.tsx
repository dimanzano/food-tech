import * as React from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
import CssBaseline from "@mui/material/CssBaseline";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { drawerItems } from "../drawerItems";
import { useNavLink } from "../hooks/useNavLink";
import { useIsMobile } from "../hooks/useIsMobile";
import { FoodTechLogo } from "./FoodTechLogo";

const drawerWidth = 280;

export function DashboardLayout() {
  const isMobile = useIsMobile();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  React.useEffect(() => {
    if (isMobile) {
      setDrawerOpen(false);
    }
  }, [isMobile]);

  function info() {
    navigate("/info");
  }

  return (
    <Box display="flex" height="100vh" flexDirection="column">
      <CssBaseline />
      <Box display="flex" height="100vh" flexDirection="column">
        <AppBar
          position="fixed"
          sx={{
            border: 0,
            borderBottom: 1,
            borderBottomColor: "grey.300",
            zIndex: 2,
          }}
          color="inherit"
          elevation={0}
          variant="outlined"
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                height: (t) => t.mixins.toolbar.minHeight,
                boxSizing: "border-box",
                py: 1,
              }}
            >
              <FoodTechLogo />
            </Box>
            <Box flexGrow={1} />
            <Button onClick={info}>More info</Button>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Box flexGrow={1} display="flex">
          {isMobile ? (
            <Drawer
              variant="temporary"
              open={drawerOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              <DrawerItems />
            </Drawer>
          ) : (
            <Drawer
              variant="permanent"
              sx={{
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                  zIndex: 1,
                },
              }}
            >
              <Toolbar />
              <DrawerItems />
            </Drawer>
          )}
          <Box
            sx={{ marginLeft: { xs: 0, md: `${drawerWidth}px` } }}
            flexGrow={1}
            p={2}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const DrawerItems = () => {
  return (
    <div>
      <List>
        {drawerItems.map((item) => (
          <DrawerItem key={item.href} {...item} />
        ))}
      </List>
    </div>
  );
};

const DrawerItem = ({ label, href, icon: Icon }: (typeof drawerItems)[0]) => {
  const { isPending, isActive } = useNavLink(href);
  return (
    <ListItem disablePadding>
      <ListItemButton
        component={Link}
        to={href}
        selected={isPending || isActive}
      >
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
};
