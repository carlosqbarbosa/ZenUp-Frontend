import * as React from "react";
import {
  Box,
  Typography,
} from "@mui/material";

import FormLogin from "../../components/Login/FormLogin"; 
import { useNavigate } from "react-router-dom";
import colors from "../../styles/colors";
import LogoRoxa from "../../assets/LogoRoxa.png";
import LoginImg from "../../assets/LoginImg.png";


interface LoginProps {
  onRegisterClick?: () => void;
}

export default function LoginPage({ onRegisterClick }: LoginProps) {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica de login
     navigate("/dashboard");
  };

  return (
    // CONTÊINER PRINCIPAL
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
      {/* --- Lado esquerdo: texto + formulário --- */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center", 
          justifyContent: "center",
          
          px: { xs: 4, md: 8 },
          py: { xs: 4, md: 8 }, 
          flexGrow: 1, 
        }}
      >
        {/* Contêiner INTERNO para o Conteúdo: Gerencia a Altura e o Scroll */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            maxHeight: "100%", 
            overflowY: "auto", 
            pr: 2, 
          }}
        >
          {/* LOGOTIPO, TEXTOS, FORMULÁRIO */}
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
            Bem-vindo!
          </Typography>

          <Typography
            sx={{
              color: colors.textGray,
              mb: { xs: 3, md: 5 },
              maxWidth: "400px",
              lineHeight: 1.5,
            }}
          >
            Elevando a cultura de bem-estar da sua empresa, com dados que inspiram
            cuidado e uma equipe que floresce.
          </Typography>

          <Typography
            sx={{
              fontWeight: 600,
              mb: 1,
              color: colors.textGray,
            }}
          >
            Faça o login da sua conta
          </Typography>

          {/* Chamada ao FormLogin */}
          <FormLogin onSubmit={handleLogin} onRegisterClick={onRegisterClick} />
        </Box>
      </Box>

      {/* --- Lado direito: imagem --- */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          width: "50%", 
          height: "100%",
          overflow: "hidden",
          borderRadius: "40px 0px 0px 40px",
        }}
      >
        <Box
          component="img"
          src={LoginImg}
          alt="Equipe unida"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "inherit",
          }}
        />
      </Box>
    </Box>
  );
}