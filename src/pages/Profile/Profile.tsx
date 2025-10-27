import Layout from "../../components/Layout/Layout";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React, { useState } from "react";

import type { ProfileData } from "../../types/profile";
import ProfileForm from "../../components/Profile/ProfileForm";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import colors from "../../styles/colors";
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
      <Box sx={{ p: 0, width: "100%", maxWidth: 1200, color: colors.primary }}>
        <ProfileHeader />
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <ProfileForm
              profileData={profileData}
              isEditing={isEditing}
              onSave={handleSubmit}
              onCancel={handleCancel}
              onEditStart={() => setIsEditing(true)}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
