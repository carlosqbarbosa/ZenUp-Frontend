import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; 
import colors from "../../styles/colors";
import CadastroImg from "../../assets/CadastroImg.png";
import LogoRoxa from "../../assets/LogoRoxa.png";
import FormRegister from "../../components/Register/FormRegister";
import * as React from "react"; // Necessário para o React.FormEvent

interface RegisterProps {
  onBackToLogin?: () => void;
}

export default function RegisterPage({ onBackToLogin }: RegisterProps) {
  const navigate = useNavigate(); // Declaração do navigate

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Impede o recarregamento da página
    console.log("Tentativa de Cadastro...");
    
    // >>> AÇÃO DE NAVEGAÇÃO ADICIONADA AQUI <<<
    navigate("/dashboard"); 
  }; // <<< Fim da função handleRegister

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
      {/* --- Lado esquerdo: imagem --- */}
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

      {/* --- Lado direito: formulário --- */}
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
        {/* Contêiner interno que rola (para responsividade móvel) */}
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

          {/* MUDANÇA CRÍTICA: Envolver o formulário e o botão em um componente <form> */}
          <Box 
            component="form" 
            onSubmit={handleRegister} // Chama a função que navega
            sx={{ 
                width: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'flex-start' 
            }}
          >
            <FormRegister />

            <Button
              variant="contained"
              fullWidth 
              type="submit" // CRÍTICO: Dispara o onSubmit do formulário
              sx={{
                backgroundColor: colors.primary,
                borderRadius: "12px",
                height: 48,
                textTransform: "none",
                fontWeight: 600,
                mt: 2,
                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
                "&:hover": { backgroundColor: "#1d0879" },
              }}
            >
              Entrar
            </Button>
          </Box>
          {/* Fim do componente <form> */}

          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              mt: 2,
              color: colors.textGray,
              width: "100%", 
              pb: { xs: 4, md: 0 } 
            }}
          >
            Já possui conta?{" "}
            <span
              style={{ color: colors.secondary, cursor: "pointer" }}
              onClick={onBackToLogin}
            >
              Login
            </span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}