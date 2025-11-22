import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import DescriptionIcon from "@mui/icons-material/Description";
import colors from "../../styles/colors";
import Logo from "../../assets/LogoRoxa.png";
import { useState, useEffect } from "react"; 
import LogoutModal from "../Modals/LogoutModal";
import { useUser } from "../../context/UserContext"; 


import { useAuth } from "../../context/AuthContext";

const primaryMenu = [
  { name: "Dashboard", path: "/dashboard", Icon: DashboardIcon },
  { name: "Perfil", path: "/profile", Icon: PersonIcon },
];

const secondaryMenu = [
  { name: "Suporte", path: "/faq", Icon: HelpOutlineIcon },
  { name: "Sair", path: "/logout", Icon: LogoutIcon },
];

const activeBgColor = "rgba(67, 53, 167, 0.1)";
const reportsCardPath = "/reports";

export default function Sidebar() {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const { nomeCompleto, setNomeCompleto } = useUser();

  const userName = nomeCompleto || user?.nome_funcionario || "Usuário";

  useEffect(() => {
    if (user?.nome_funcionario && nomeCompleto !== user.nome_funcionario) {
      setNomeCompleto(user.nome_funcionario);
    }
  }, [user, nomeCompleto, setNomeCompleto]);

  const isActive = (path: string) => location.pathname === path;

  return (
<Box
  sx={{
    width: 220,
    minWidth: 220,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 3,
    borderRight: "1px solid #eee",
    position: "relative",
  }}
>

 <img src={Logo} alt="ZenUp Logo" style={{ height: 60, marginBottom: 40 }} />

      <List sx={{ width: "100%", padding: 0 }}>
        {primaryMenu.map((item) => (
          <ListItem key={item.name} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{
                borderRadius: "12px",
                padding: "10px 15px",
                backgroundColor: isActive(item.path) ? activeBgColor : "transparent",
                "&:hover": { backgroundColor: isActive(item.path) ? activeBgColor : "#f0f0f0" },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color: isActive(item.path) ? colors.primary : colors.textGray,
                }}
              >
                <item.Icon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: isActive(item.path) ? colors.primary : colors.textGray,
                    }}
                  >
                    {item.name}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box
        onClick={() => navigate("/reports")}
        sx={{
          width: "100%",
          mt: 3,
          position: "relative",
          backgroundColor: isActive(reportsCardPath) ? activeBgColor : "#fff",
          borderRadius: "8px",
          padding: "10px 14px",
          cursor: "pointer",
          boxShadow: "0px 4px 14px rgba(238, 238, 238, 0.8)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "70px",
          textDecoration: "none",
        }}
        component={Link}
        to={reportsCardPath}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", padding: "40px" }}>
          <Typography variant="body2" sx={{ color: colors.text, lineHeight: 1 }}>
            Baixe seus
          </Typography>
          <Typography sx={{ fontWeight: 700, color: colors.primary, fontSize: "1.2rem", lineHeight: 1 }}>
            Relatórios
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: colors.primary,
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            position: "absolute",
            right: 15,
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 4px 8px #4235a75d",
          }}
        >
          <DescriptionIcon sx={{ color: "#fff" }} />
        </Box>
      </Box>

  <List sx={{ width: "100%", mt: "auto", borderTop: "1px solid #eee" }}>
    {secondaryMenu.map((item) => {
      const isLogout = item.name === "Sair";
      return (
        <ListItem key={item.name} disablePadding>
          <ListItemButton
            component={isLogout ? Box : Link}
            to={isLogout ? undefined : item.path}
            onClick={isLogout ? () => setIsLogoutModalOpen(true) : undefined}
            sx={{
              borderRadius: "12px",
              padding: "10px 15px",
              "&:hover": { backgroundColor: "#f0f0f0" },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40, color: colors.textGray }}>
              <item.Icon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography sx={{ fontWeight: 500, color: colors.textGray }}>{item.name}</Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      );
    })}
  </List>
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      padding: "16px",
      borderTop: "1px solid #eee",
      width: "100%",
      mt: 2,
    }}
  >

         <Box>
      <Typography variant="body2" sx={{ color: colors.textGray }}>
          Bem-vindo de volta{" "}
          <span style={{ fontWeight: 600, color: colors.primary }}>
            {userName} 
          </span>
      </Typography>
    </Box>
</Box>

      <LogoutModal 
        open={isLogoutModalOpen} 
        onClose={() => setIsLogoutModalOpen(false)} 
        onConfirmLogout={logout}
      />
    </Box>
  );
}