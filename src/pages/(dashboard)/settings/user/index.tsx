import { Box, Typography } from "@mui/material";
import ProfileSection from "../../../../components/user-management/ProfileSection";
import PasswordSection from "../../../../components/user-management/PasswordSection";
import NotificationSection from "../../../../components/user-management/NotificationSection";
import DeactivateSection from "../../../../components/user-management/DeactivateSection";

export default function SettingsUserPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 3,
        maxWidth: 600,
        margin: "auto",
        backgroundColor: "grey.100",
        gap: 1,
      }}
    >
      <Typography variant="h5" textAlign="center" fontWeight={"bold"}>
        User Management
      </Typography>
      <ProfileSection />
      <PasswordSection />
      <NotificationSection />
      <DeactivateSection />
    </Box>
  );
}
