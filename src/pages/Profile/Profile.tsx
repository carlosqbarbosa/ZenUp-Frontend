import Layout from "../../components/Layout/Layout";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React, { useState } from "react";

import type { ProfileData } from "../../types/profile";
import ProfileForm from "../../components/Profile/ProfileForm";
import ProfileHeader from "../../components/Profile/ProfileHeader";
//import colors from "../../styles/colors";
import { useUser } from "../../context/UserContext";
import { usePersistentState } from "../../hooks/usePersistentState";

const initialProfileData: ProfileData = {
  nomeCompleto: "",
  email: "",
  telefone: "",
  dominio: "",
  estado: "",
  cidade: "",
  foto: "",
};

export default function Perfil() {
  const [profileData, setProfileData] = usePersistentState<ProfileData>(
    "profileData",
    initialProfileData
  );

  const [isEditing, setIsEditing] = useState(false);
  const { setNomeCompleto } = useUser();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | { target: { name: string; value: string } }
  ) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));

    if (name === "nomeCompleto") setNomeCompleto(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <Layout title="Meu Perfil">
      <Box
        sx={{
          width: "100%",
          maxWidth: "100vw",
          overflowX: "hidden",
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
          boxSizing: "border-box",
          py: { xs: 2, sm: 3, md: 4 },
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 1200,
            display: "flex",
            flexDirection: "column",
            gap: { xs: 3, md: 4 },
          }}
        >
          {/* Cabeçalho do perfil (foto e título) */}
          <ProfileHeader />

          {/*  Layout responsivo: formulário e imagem lado a lado no desktop */}
          <Grid
            container
            spacing={4}
            alignItems="flex-start"
            justifyContent="center"
            sx={{
              width: "100%",
              margin: 0,
              flexWrap: "wrap",
            }}
          >
            {/*  Formulário ocupa 100% no mobile e 8/12 no desktop */}
            <Grid item xs={12} md={8} sx={{ width: "100%", minWidth: 0 }}>
              <ProfileForm
                profileData={profileData}
                isEditing={isEditing}
                onSave={handleSubmit}
                onCancel={handleCancel}
                onEditStart={() => setIsEditing(true)}
                onChange={handleChange}
              />
            </Grid>

            {/*  Foto de perfil e botão de edição (se existirem) ficam ao lado */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                mt: { xs: 2, md: 0 },
              }}
            >
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
}
