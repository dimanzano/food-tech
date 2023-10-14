import {
    Speed,
    SignalCellularAlt,
    RestaurantMenu,
    Badge,
    TakeoutDining
  } from "@mui/icons-material";
  
  export const drawerItems = [
    { label: "Dashboard", icon: Speed, href: "/" },
    { label: "Data Collection", icon: SignalCellularAlt, href: "/data" },
    { label: "Restaurants", icon: TakeoutDining, href: "/restaurants" },
    { label: "Supermarkets", icon: RestaurantMenu, href: "/supermarkets" },
    { label: "Memberships", icon: Badge, href: "/memberships" },
  ];
 