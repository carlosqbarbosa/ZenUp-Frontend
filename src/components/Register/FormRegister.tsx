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
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import colors from "../../styles/colors";

const FormRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
      {/* Nome completo */}
      <TextField
        fullWidth
        label="Nome completo"
        placeholder="Seu nome completo"
        InputProps={{
          sx: {
            borderRadius: "10px",
          },
        }}
      />

      {/* Email + Domínio */}
      <Box
        sx={{
          display: "flex",
          gap: 1.5,
          width: "100%",
        }}
      >
        <TextField
          label="Email"
          placeholder="adminexemplo"
          sx={{
            flex: 1,
            "& .MuiOutlinedInput-root": { borderRadius: "10px" },
          }}
        />
        <TextField
          label="Domínio"
          placeholder="@exemplo.com"
          sx={{
            width: "40%",
            "& .MuiOutlinedInput-root": { borderRadius: "10px" },
          }}
        />
      </Box>

      {/* Senha */}
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

      {/* Confirmar senha */}
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

      {/* Aviso de senhas não coincidentes */}
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

      {/* Checkbox */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 1,
          width: "100%",
          mt: 0.5,
        }}
      >
        <Checkbox
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
    </Box>
  );
};

export default FormRegister;
