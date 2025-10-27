import * as React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import colors from "../../styles/colors";

interface FormLoginProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onRegisterClick?: () => void;
}

const FormLogin: React.FC<FormLoginProps> = ({ onSubmit, onRegisterClick }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Preencha todos os campos!");
      return;
    }
    onSubmit(e);

    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha: password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login bem-sucedido:", data);
        alert("Login realizado com sucesso!");
        // Exemplo: salvar token no localStorage
        localStorage.setItem("token", data.token);
        // Redirecionar ou mudar tela aqui
      } else {
        alert(data.error || "E-mail ou senha incorretos!");
      }
    } catch (error) {
      console.error("Erro ao conectar com o servidor:", error);
      alert("Erro de conexão com o servidor!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "450px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        mt: 2,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
            },
          }}
        />

        <FormControl variant="outlined" fullWidth>
          <InputLabel>Senha</InputLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ borderRadius: "12px" }}
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

        <Button
          variant="contained"
          fullWidth
          type="submit"
          disabled={loading}
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
          {loading ? "Entrando..." : "Entrar"}
        </Button>
      </Box>

      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          mt: 2,
          color: colors.textGray,
          pb: { xs: 2, md: 0 },
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
  );
};

export default FormLogin;
