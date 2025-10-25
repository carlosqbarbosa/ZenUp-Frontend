import React from "react";
import { Box, TextField, Button, Typography, Grid, Avatar } from "@mui/material";
import colors from "../../styles/colors"; 

export type ProfileData = {
  nomeCompleto: string;
  telefone: string;
  email: string;
  dominio?: string;
  estado?: string;
  cidade?: string;
};

export type ProfileFormProps = {
  profileData: ProfileData;
  isEditing: boolean;
  onSave: (e: React.FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
  onEditStart: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const CustomTextFieldStyle = {
  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
  "& .MuiOutlinedInput-root": {
    padding: "8px 0",
    borderBottom: "1px solid #ddd",
    borderRadius: "0",
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: colors.primary,
    },
    "& legend": { display: "none" },
    "& fieldset": { top: 0 },
    "&.Mui-disabled": {
      backgroundColor: "#fafafa",
      borderBottomColor: "#ccc",
    },
  },
  "& .MuiInputBase-input": {
    padding: "0 0 8px 0",
    fontSize: "1rem",
  },
};

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
  const nameParts = profileData.nomeCompleto?.split(" ") || [];
  const firstName = nameParts[0] || "";
  const secondName = nameParts[1] || "";

  return (
    <Box
      component="form"
      onSubmit={onSave}
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
        maxWidth: "100%",
        overflowX: "hidden",
      }}
    >
      {/* COLUNA ESQUERDA - CAMPOS */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: colors.primary }}>
          Informações Pessoais
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          Suas informações básicas e de contato.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <InputWrapper label="Nome completo">
              <TextField
                fullWidth
                name="nomeCompleto"
                value={profileData.nomeCompleto}
                onChange={onChange}
                sx={CustomTextFieldStyle}
                variant="outlined"
                disabled={!isEditing}
              />
            </InputWrapper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputWrapper label="Telefone">
              <TextField
                fullWidth
                name="telefone"
                value={profileData.telefone}
                onChange={onChange}
                sx={CustomTextFieldStyle}
                variant="outlined"
                disabled={!isEditing}
              />
            </InputWrapper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputWrapper label="Email">
              <TextField
                fullWidth
                name="email"
                type="email"
                value={profileData.email}
                onChange={onChange}
                sx={CustomTextFieldStyle}
                variant="outlined"
                disabled={!isEditing}
              />
            </InputWrapper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputWrapper label="Domínio">
              <TextField
                fullWidth
                name="dominio"
                value={profileData.dominio || ""}
                disabled
                sx={CustomTextFieldStyle}
                variant="outlined"
              />
            </InputWrapper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputWrapper label="Estado">
              <TextField
                fullWidth
                name="estado"
                value={profileData.estado || ""}
                onChange={onChange}
                sx={CustomTextFieldStyle}
                variant="outlined"
                disabled={!isEditing}
              />
            </InputWrapper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputWrapper label="Cidade">
              <TextField
                fullWidth
                name="cidade"
                value={profileData.cidade || ""}
                onChange={onChange}
                sx={CustomTextFieldStyle}
                variant="outlined"
                disabled={!isEditing}
              />
            </InputWrapper>
          </Grid>
        </Grid>
      </Box>

      {/* COLUNA DIREITA - FOTO, NOME E BOTÕES */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: { md: "220px" },
          width: { xs: "100%", md: "220px" },
          mt: { xs: 1, md: 5 },
          flexShrink: 0,
        }}
      >
        <Avatar
          src="https://i.pravatar.cc/300?u=FelipeGusmao"
          alt={profileData.nomeCompleto}
          sx={{
            width: 160,
            height: 160,
            borderRadius: "16px",
            mb: 2,
            boxShadow: "0px 2px 6px rgba(0,0,0,0.08)",
          }}
        />

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
              width: { xs: "100%", md: "100%" },
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
    </Box>
  );
};

export default ProfileForm;

