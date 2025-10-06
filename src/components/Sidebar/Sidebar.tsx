import { Box, Typography, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import colors from "../../styles/colors";
import Logo from "../../assets/LogoRoxa.png";

export default function Sidebar() {
  const menuItems = ["Dashboard", "Perfil", "Suporte"];

  return (
    <Box
      sx={{
        width: 240,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 3,
        borderRight: "1px solid #eee",
      }}
    >
      <img 
        src={Logo} 
        alt="ZenUp Logo" 
        style={{ 
          height: 50, 
          marginBottom: 30 
          }} 
      />
      <List sx={{ width: "100%" }}>
        {menuItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <ListItemText
                primary={
                  <Typography sx={{ fontWeight: 600, color: colors.primary }}>{item}</Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
