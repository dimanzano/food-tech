import * as React from "react";
import { Menu as MenuIcon } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { drawerItems } from "../drawerItems"
import { useNavLink } from "../hooks/useNavLink";
import { useIsMobile } from "../hooks/useIsMobile";

const drawerWidth = 280;

export function DashboardLayout() {
  const isMobile = useIsMobile();
  const [drawerOpen, setDrawerOpen] = React.useState(false);


  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  React.useEffect(() => {
    if (isMobile) {
      setDrawerOpen(false);
    }
  }, [isMobile]);


  return (
    <ThemeProvider theme={theme}>
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
              <MenuIcon open={false} />
            </IconButton>
            <Box
              sx={{
                height: (t) => t.mixins.toolbar.minHeight,
                boxSizing: "border-box",
                py: 1,
              }}
            >
                <Typography>
                    menu
                </Typography>
            </Box>
            <Box flexGrow={1} />
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
    </ThemeProvider>
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

