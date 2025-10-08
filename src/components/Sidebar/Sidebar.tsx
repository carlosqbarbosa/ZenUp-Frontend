import { Box, Typography, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Avatar } from "@mui/material";
import { Link, useLocation } from "react-router-dom"; // Importamos o Link e o useLocation
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import DescriptionIcon from "@mui/icons-material/Description"; // Ícone para Relatórios
import colors from "../../styles/colors";
import Logo from "../../assets/LogoRoxa.png"; // Assumindo que a logo é importada aqui


// Estrutura de links para fácil manutenção
const primaryMenu = [
  { name: "Dashboard", path: "/dashboard", Icon: DashboardIcon },
  { name: "Perfil", path: "/profile", Icon: PersonIcon },
];

const secondaryMenu = [
  { name: "Suporte", path: "/faq", Icon: HelpOutlineIcon },
  { name: "Sair", path: "/logout", Icon: LogoutIcon },
];

// Cor de fundo para o item ativo (Roxo 10% de transparência)
const activeBgColor = 'rgba(67, 53, 167, 0.1)';

// -------------------------------------------------------------
// Componente Sidebar
export default function Sidebar() {
  const location = useLocation(); // Hook para saber qual rota está ativa
  
  // Função auxiliar para determinar se o item está ativo
  const isActive = (path: string) => location.pathname === path;

  return (
    <Box
      sx={{
        width: 280, // Aumentei um pouco para caber melhor
        minWidth: 280,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 3,
        borderRight: "1px solid #eee",
        position: 'relative', 
      }}
    >
      {/* 1. Logo */}
      <img src={Logo} alt="ZenUp Logo" style={{ height: 60, marginBottom: 40 }} />

      {/* 2. Menu Principal */}
      <List sx={{ width: "100%", padding: 0 }}>
        {primaryMenu.map((item) => (
          <ListItem key={item.name} disablePadding sx={{ mb: 1 }}>
            {/* O Link envolve o ListItemButton para habilitar a navegação */}
            <ListItemButton
              component={Link} 
              to={item.path}
              sx={{
                borderRadius: "12px",
                padding: "10px 15px",
                backgroundColor: isActive(item.path) ? activeBgColor : 'transparent',
                "&:hover": { backgroundColor: isActive(item.path) ? activeBgColor : '#f0f0f0' },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: isActive(item.path) ? colors.primary : colors.textGray }}>
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
      
      {/* 3. Card de Relatórios */}
      <Box
        sx={{
          width: "100%",
          mt: 3,
          position: 'relative', 
          // Estilos de fundo e borda do CARD
          backgroundColor: activeBgColor,
          borderRadius: "8px", 
          padding: "10px 14px", 
          cursor: "pointer",
          boxShadow: '0px 4px 14px rgba(238, 238, 238, 0.8)',
          
          // Novo estilo para alinhar o texto verticalmente
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '70px',
        }}
        component={Link}
        to="/reports"
      >
        <Box sx={{ 
          // Este Box agora é apenas para os textos
          display: 'flex', 
          flexDirection: 'column', 
          gap: '8px',
          padding:'40px'
        }}>
          {/* Textos */}
          <Typography variant="body2" sx={{ 
            color: colors.text, 
            lineHeight: 1, 
            textDecoration: 'none',
          }}>
            Baixe seus
          </Typography>
          <Typography sx={{ 
            fontWeight: 700, 
            color: colors.primary,
            fontSize: '1.2rem',
            lineHeight: 1,
            textDecoration: 'none', // Remove o sublinhado do link
          }}>
            Relatórios
          </Typography>
        </Box>
        
        {/* Ícone flutuante à direita e centralizado verticalmente */}
        <Box sx={{ 
          backgroundColor: '#4335A7',
          borderRadius: '50%', 
          width: '40px',
          height: '40px',
          position: 'absolute',
          right: 60,
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0px 4px 8px #4235a75d',
        }}>
          {/* icone do botão baixae seus relatorios */}
          <DescriptionIcon sx={{ color: '#fff' }} /> 
        </Box>
      </Box>

      {/* 4. Menu Secundário (Rodapé da barra lateral) */}
      <List sx={{ 
      width: "100%", 
      mt: 'auto', 
      borderTop: '1px solid #eee',
      }}>
      
        {secondaryMenu.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link} 
              to={item.path}
              sx={{ borderRadius: "12px", padding: "10px 15px" }}
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
        ))}
      </List>
      
      {/* 5. Informações do Usuário (Rodapé) */}
       <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        padding: '16px', 
        borderTop: '1px solid #eee', 
        width: '100%',
        mt: 2,
       }}>
          <Avatar 
            sx={{ 
              width: 50, 
              height: 50, 
              mr: 3, 
              borderRadius: '12px'
            }} 
            src="https://i.pravatar.cc/150?u=FelipeGusmao" 
          />
          <Box>
            <Typography variant="body2" sx={{ color: colors.textGray }}>Bem vindo de volta!</Typography>
            <Typography sx={{ fontWeight: 600, color: colors.primary }}>Felipe Gusmão</Typography>
          </Box>
       </Box>
    </Box>
  );
}