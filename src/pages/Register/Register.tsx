import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; 
import colors from "../../styles/colors";
import CadastroImg from "../../assets/CadastroImg.png";
import LogoRoxa from "../../assets/LogoRoxa.png";
import FormRegister from "../../components/Register/FormRegister";
import * as React from "react"; 

export default function RegisterPage() {
  const navigate = useNavigate(); 

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log("Tentativa de Cadastro...");
    
    navigate("/dashboard"); 
  }; 

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "stretch", 
        height: "100dvh", 
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          width: "50%",
          height: "100%",
          overflow: "hidden",
          borderRadius: "0 40px 40px 0", 
        }}
      >
        <Box
          component="img"
          src={CadastroImg}
          alt="Equipe ZenUp"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "inherit",
          }}
        />
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", 
          alignItems: "center", 
          
          px: { xs: 4, md: 8 },
          height: "100%",
          py: { xs: 4, md: 0 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start", 
            width: "100%",
            maxWidth: "450px", 
            maxHeight: "100%",
            overflowY: { xs: "auto", md: "hidden" },
            py: { xs: 0, md: 0 },
            pr: 2, 
          }}
        >
          <img
            src={LogoRoxa}
            alt="ZenUp Logo"
            style={{
              height: "70px",
              marginBottom: "25px",
            }}
          />

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: colors.primary,
              mb: 1,
            }}
          >
            Cadastre-se
          </Typography>

          <Typography
            sx={{
              color: colors.textGray,
              mb: 4,
              maxWidth: "400px",
              lineHeight: 1.5,
            }}
          >
            Faça seu cadastro e faça parte da família ZenUp.
          </Typography>

          <Box 
            component="form" 
            onSubmit={handleRegister} 
            sx={{ 
                width: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'flex-start' 
            }}
          >
            <FormRegister />
          </Box>

          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              mt: 2,
              color: colors.textGray,
              width: "100%",
              pb: { xs: 4, md: 0 },
            }}
          >
            Já possui conta?{" "}
            <span
              style={{
                color: colors.secondary,
                cursor: "pointer",
                fontWeight: 600,
              }}
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}