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
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import colors from "../../styles/colors"; 

interface FormLoginProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onRegisterClick?: () => void;
}

const FormLogin = ({ onSubmit, onRegisterClick }: FormLoginProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
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
        onSubmit={onSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
        noValidate
        autoComplete="off"
      >
        {/* CORREÇÃO: Aplica borderRadius no OutlinedInput interno do TextField */}
        <TextField 
            label="Email" 
            type="email" 
            variant="outlined" 
            sx={{ 
                '& .MuiOutlinedInput-root': {
                    borderRadius: '12px', 
                }
            }}
        />

        <FormControl variant="outlined">
          <InputLabel>Senha</InputLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            sx={{ borderRadius: '12px' }} 
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
        {/* 
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
        </Typography>*/}

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
          type="submit"
        >
          Entrar
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

