import { Box, Typography, Button } from "@mui/material";
import colors from "../../styles/colors";
import CadastroImg from "../../assets/CadastroImg.png";
import LogoRoxa from "../../assets/LogoRoxa.png";
import FormRegister from "../../components/Register/FormRegister";

interface RegisterProps {
  onBackToLogin?: () => void;
}

export default function RegisterPage({ onBackToLogin }: RegisterProps) {
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
        margin: 0,
      }}
    >
      {/* --- Lado esquerdo: imagem --- */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          width: "50%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          borderRadius: "40px 40px 35px 40px",
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
          alignItems: "flex-start",
          justifyContent: "center",
          px: { xs: 4, md: 8 },
          marginLeft: { md: "60px" },
          overflow: "hidden",
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

        <FormRegister />

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: colors.primary,
            borderRadius: "12px",
            height: 48,
            textTransform: "none",
            fontWeight: 600,
            mt: 2,
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
            "&:hover": { backgroundColor: "#1d0879" },
            width: "35ch",
            alignSelf: "center",
          }}
        >
          Entrar
        </Button>

        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            mt: 2,
            color: colors.textGray,
            alignSelf: "center",
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
  );
}
