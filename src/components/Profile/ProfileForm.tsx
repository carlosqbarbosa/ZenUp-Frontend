import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Avatar,
  Snackbar,
  Alert,
} from "@mui/material";
import colors from "../../styles/colors";
import { useUser } from "../../context/UserContext";

export type ProfileData = {
  nomeCompleto: string;
  telefone: string;
  email: string;
  dominio?: string;
  estado?: string;
  cidade?: string;
  foto?: string;
};

export type ProfileFormProps = {
  profileData: ProfileData;
  isEditing: boolean;
  onSave: (e: React.FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
  onEditStart: () => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};


const getTextFieldStyle = (isEditing: boolean) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: isEditing ? "#f5f5f5" : "#fff",
    borderRadius: "8px",
    transition: "all 0.2s ease",
    "& fieldset": {
      borderColor: isEditing ? "#7e57c2" : "#e0e0e0",
    },
    "&:hover fieldset": {
      borderColor: isEditing ? "#673ab7" : "#bdbdbd",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#673ab7",
      boxShadow: isEditing
        ? "0 0 0 2px rgba(103, 58, 183, 0.1)"
        : "0 0 0 1px rgba(0,0,0,0.05)",
    },
    "&.Mui-disabled": {
      backgroundColor: "#fff",
      opacity: 1,
      "& .MuiInputBase-input": {
        WebkitTextFillColor: "#444 !important",
      },
    },
  },
  "& .MuiInputBase-input": {
    color: isEditing ? "#222" : "#555",
    fontSize: "0.95rem",
    padding: "10px 12px",
    fontWeight: isEditing ? 500 : 400,
  },
  "& input:-webkit-autofill": {
    boxShadow: "0 0 0 30px white inset !important", 
    WebkitTextFillColor: "#222 !important",
  },
});

const InputWrapper: React.FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children,
}) => (
  <Box sx={{ width: "100%", mb: 2 }}>
    <Typography
      variant="caption"
      sx={{
        fontWeight: 500,
        mb: 0.5,
        display: "block",
        color: colors.textGray,
      }}
    >
      {label}
    </Typography>
    {children}
  </Box>
);

const ProfileForm: React.FC<ProfileFormProps> = ({
  profileData,
  isEditing,
  onSave,
  onCancel,
  onEditStart,
  onChange,
}) => {
  const { setNomeCompleto, setFotoPerfil } = useUser();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [firstName, secondName = ""] = profileData.nomeCompleto.split(" ");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(e);
    localStorage.setItem("profileData", JSON.stringify(profileData));
    setNomeCompleto(profileData.nomeCompleto);
    setFotoPerfil(profileData.foto || "");
    setOpenSnackbar(true);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "100%",
        boxSizing: "border-box",
        p: { xs: 3, md: 4 },
        backgroundColor: "#fff",
        borderRadius: "16px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
        display: "flex",
        gap: { xs: 3, md: 6 },
        flexDirection: { xs: "column", md: "row" },
        alignItems: "flex-start",
      }}
    >
      {/* COLUNA ESQUERDA */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: colors.primary }}>
          Informações Pessoais
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          Suas informações básicas e de contato.
        </Typography>

        <Grid container spacing={4}>
          {[
            { label: "Nome completo", name: "nomeCompleto" },
            { label: "Telefone", name: "telefone" },
            { label: "Email", name: "email", type: "email" },
            { label: "Domínio", name: "dominio" },
            { label: "Estado", name: "estado" },
            { label: "Cidade", name: "cidade" },
          ].map((field) => (
            <Grid key={field.name} item xs={12} sm={6}>
              <InputWrapper label={field.label}>
                <TextField
                  fullWidth
                  type={field.type || "text"}
                  name={field.name}
                  value={(profileData as any)[field.name] || ""}
                  onChange={onChange}
                  sx={getTextFieldStyle(isEditing)}
                  variant="outlined"
                  disabled={!isEditing}
                  color="primary"
                />
              </InputWrapper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* COLUNA DIREITA */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: { md: "220px" },
          width: { xs: "100%", md: "220px" },
          mt: { xs: 1, md: 5 },
        }}
      >
        <input
          accept="image/*"
          id="upload-photo"
          type="file"
          style={{ display: "none" }}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                onChange({
                  target: { name: "foto", value: reader.result as string },
                } as any);
              };
              reader.readAsDataURL(file);
            }
          }}
          disabled={!isEditing}
        />

        <label htmlFor="upload-photo">
          <Box
            sx={{
              position: "relative",
              cursor: isEditing ? "pointer" : "default",
              "&:hover .overlay": isEditing
                ? { opacity: 1, transition: "opacity 0.3s" }
                : {},
            }}
          >
            <Avatar
              src={
                profileData.foto ||
                `https://i.pravatar.cc/300?u=${profileData.nomeCompleto}`
              }
              alt={profileData.nomeCompleto}
              sx={{
                width: 160,
                height: 160,
                borderRadius: "16px",
                mb: 2,
                boxShadow: "0px 2px 6px rgba(0,0,0,0.08)",
              }}
            />
            {isEditing && (
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "16px",
                  opacity: 0,
                  transition: "opacity 0.3s",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                Alterar foto
              </Box>
            )}
          </Box>
        </label>

        <Typography
          variant="subtitle1"
          sx={{
            color: colors.primary,
            fontWeight: 600,
            textAlign: "center",
            mb: 2,
          }}
        >
          {firstName} {secondName}
        </Typography>

        {!isEditing ? (
          <Button
            variant="outlined"
            onClick={onEditStart}
            sx={{
              color: colors.primary,
              borderColor: colors.primary,
              borderRadius: "12px",
              textTransform: "none",
              fontWeight: 600,
              width: "100%",
            }}
          >
            Editar Perfil
          </Button>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "100%",
              mt: 1,
            }}
          >
            <Button
              variant="contained"
              type="submit"
              sx={{
                height: 48,
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 600,
                backgroundColor: colors.buttonPurple,
                "&:hover": {
                  backgroundColor: colors.primaryDark,
                },
                width: "100%",
              }}
            >
              Salvar alterações
            </Button>
            <Button
              variant="outlined"
              onClick={onCancel}
              sx={{
                color: colors.textGray,
                borderColor: colors.textGray,
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 600,
                width: "100%",
              }}
            >
              Cancelar
            </Button>
          </Box>
        )}
      </Box>

      {/* SNACKBAR */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: "100%", bgcolor: colors.greenSuccess }}
        >
          Alterações salvas com sucesso!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ProfileForm;


