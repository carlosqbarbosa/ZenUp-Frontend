import * as React from "react";
import { Box, Typography, TextField, Button, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import colors from "../../styles/colors";
import LoginImg from "../../assets/LoginImg.png";
import LogoRoxa from "../../assets/LogoRoxa.png";

interface LoginProps {
  onRegisterClick: () => void
}

export default function LoginPage({ onRegisterClick }: LoginProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();

 return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
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
          alignItems: "flex-start",
          justifyContent: "center",
          marginLeft: "60px",
          px: { xs: 4, md: 8 },
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
          Bem-vindo!
        </Typography>

        <Typography
          sx={{
            color: colors.textGray,
            mb: 5,
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

        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "350px",
            gap: 2,
          }}
        >
          <TextField label="Email" type="email" variant="outlined" />

          <FormControl variant="outlined">
            <InputLabel>Senha</InputLabel>
            <OutlinedInput
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Senha"
            />
          </FormControl>

          <Typography
            variant="body2"
            sx={{
              textAlign: "right",
              color: colors.primary,
              cursor: "pointer",
              fontSize: "0.9rem",
              mt: -1,
            }}
          >
            Esqueceu sua senha? Recuperar agora
          </Typography>

          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: colors.primary,
              borderRadius: "12px",
              height: 48,
              textTransform: "none",
              fontWeight: 600,
              mt: 1,
              boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
              "&:hover": { backgroundColor: "#1d0879" },
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
            }}
          >
            Ainda não possui conta?{" "}
            <span
              style={{ color: colors.secondary, cursor: "pointer" }}
              onClick={onRegisterClick}
            >
              Cadastre-se
            </span>
          </Typography>
        </Box>
      </Box>

      {/* --- Lado direito: imagem --- */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          width: "50%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={LoginImg}
          alt="Equipe unida"
          style={{
            width: "95%",
            height: "95%",
            objectFit: "cover",
            borderRadius: "35px 35px 25px 35px",
          }}
        />
      </Box>
    </Box>
  );
}
