import * as React from "react";
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
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        mt: 2,
      }}
    >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "35ch" },
          "& .MuiInputLabel-root": { color: colors.primary },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField label="Nome completo" id="name" />

        {/* Email dividido em duas partes */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <TextField label="Email" id="email" sx={{ width: "22ch" }} />
          <TextField label="Domínio" id="domain" sx={{ width: "12ch" }} value="@exemplo.com" />
        </Box>

        {/* Senha */}
        <FormControl sx={{ width: "35ch" }} variant="outlined">
          <InputLabel htmlFor="password">Senha</InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? "text" : "password"}
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

        {/* Confirmar Senha */}
        <FormControl sx={{ width: "35ch" }} variant="outlined">
          <InputLabel htmlFor="confirm-password">Confirmar Senha</InputLabel>
          <OutlinedInput
            id="confirm-password"
            type={showConfirmPassword ? "text" : "password"}
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

        {/* Checkbox e texto */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Checkbox sx={{ color: colors.primary }} />
          <Typography variant="body2" sx={{ color: colors.textGray }}>
            aceito os termos
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FormRegister;
