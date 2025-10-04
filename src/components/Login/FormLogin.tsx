import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import colors from "../../styles/colors";

const FormLogin = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "24px", // aumenta o espaçamento
    mt: 2,       // margem superior opcional
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
      gap: "16px", // espaçamento entre campos
    }}
    noValidate
    autoComplete="off"
  >
    <TextField label="Email" id="outlined-email" />
    <FormControl sx={{ width: "35ch" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
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
  </Box>
</Box>
    
  );
};

export default FormLogin;

