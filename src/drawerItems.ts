import {
    Link,
    FileUpload,
    Hub,
  } from "@mui/icons-material";
  
  export const drawerItems = [
    { label: "Dashboard", icon: FileUpload, href: "/" },
    { label: "Personal Results", icon: Hub, href: "/results" },
    { label: "Tests", icon: Link, href: "/tests" },
  ];
  
  