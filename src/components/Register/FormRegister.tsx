import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  TextField,
  Checkbox,
  Typography,
  Button,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import colors from "../../styles/colors";
import { register } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const FormRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const passwordsDoNotMatch =
    confirmPassword.length > 0 && password !== confirmPassword;

  const handleRegister = async () => {
    if (!name || !email || !domain || !password || !confirmPassword) {
      alert("Preencha todos os campos!");
      return;
    }

    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    if (!acceptedTerms) {
      alert("Você precisa aceitar os termos e condições.");
      return;
    }

    try {
      const fullEmail = `${email}${domain}`;

      await register({
        nome: name,
        email: fullEmail,
        password: password,
      });

      await login(fullEmail, password);

      navigate("/dashboard");

      setName("");
      setEmail("");
      setDomain("");
      setPassword("");
      setConfirmPassword("");
      setAcceptedTerms(false);
    } catch (error: any) {
      console.error("Erro no cadastro:", error);

      const errorMessage =
        error.response?.data?.message ||
        "Falha ao conectar ou cadastrar. Tente novamente.";
      alert(errorMessage);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 2,
        width: "100%",
      }}
    >
      <TextField
        fullWidth
        label="Nome completo"
        placeholder="Seu nome completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        InputProps={{
          sx: { borderRadius: "10px" },
        }}
      />

      <Box sx={{ display: "flex", gap: 1.5, width: "100%" }}>
        <TextField
          label="Email"
          placeholder="adminexemplo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            flex: 1,
            "& .MuiOutlinedInput-root": { borderRadius: "10px" },
          }}
        />
        <TextField
          label="Domínio"
          placeholder="@exemplo.com"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          sx={{
            width: "40%",
            "& .MuiOutlinedInput-root": { borderRadius: "10px" },
          }}
        />
      </Box>

      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="password">Senha</InputLabel>
        <OutlinedInput
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ borderRadius: "10px" }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
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

      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="confirm-password">Confirmar Senha</InputLabel>
        <OutlinedInput
          id="confirm-password"
          type={showConfirmPassword ? "text" : "password"}
          placeholder="********"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          sx={{ borderRadius: "10px" }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowConfirmPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Confirmar Senha"
        />
      </FormControl>

      {passwordsDoNotMatch && (
        <Typography
          variant="caption"
          sx={{
            color: "red",
            fontSize: "0.8rem",
            marginTop: "-10px",
            marginLeft: "4px",
          }}
        >
          Senhas não coincidem
        </Typography>
      )}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          width: "100%",
          mt: 0.5,
        }}
      >
        <Checkbox
          checked={acceptedTerms}
          onChange={(e) => setAcceptedTerms(e.target.checked)}
          size="small"
          sx={{
            color: colors.primary,
            "&.Mui-checked": { color: colors.primary },
            p: 0,
          }}
        />
        <Typography
          variant="body2"
          sx={{
            color: colors.textGray,
            fontSize: "0.85rem",
          }}
        >
          Aceito os Termos e Condições
        </Typography>
      </Box>

      <Button
        fullWidth
        variant="contained"
        onClick={handleRegister}
        sx={{
          backgroundColor: colors.primary,
          borderRadius: "12px",
          height: 48,
          textTransform: "none",
          fontWeight: 600,
          mt: 1,
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
          "&:hover": { backgroundColor: colors.primaryDark },
        }}
      >
        Cadastrar
      </Button>
    </Box>
  );
};

export default FormRegister;
