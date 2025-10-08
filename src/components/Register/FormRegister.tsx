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
  // MUDANÇA: Usando destructuring de useState para importação limpa
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", // Alinha os itens à esquerda
        gap: 2,
        width: "100%", // Ocupa a largura total do contêiner pai (max-width do RegisterPage)
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
          aceito os termos
        </Typography>
      </Box>
    </Box>
  );
};

export default FormRegister;