import Layout from "../../components/Layout/Layout";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";

import type { ProfileData } from "../../types/profile";
import ProfileForm from "../../components/Profile/ProfileForm";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import { useUser } from "../../context/UserContext";
import { useAuth } from "../../context/AuthContext";

const initialProfileData: ProfileData = {
  nomeCompleto: "",
  email: "",
  dominio: "",
};

export default function Perfil() {
  const { user } = useAuth();
  const { setNomeCompleto } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>(initialProfileData);

  useEffect(() => {
    if (user) {
      const savedProfile = localStorage.getItem("profileData");
      
      if (savedProfile) {
        try {
          const parsedProfile = JSON.parse(savedProfile);
          setProfileData(parsedProfile);
        } catch (error) {
          console.error("Erro ao carregar perfil do localStorage:", error);
          setProfileData({
            nomeCompleto: user.nome_funcionario || "",
            email: user.email || "",
            dominio: "",
          });
        }
      } else {
        setProfileData({
          nomeCompleto: user.nome_funcionario || "",
          email: user.email || "",
          dominio: "",
        });
        
        localStorage.setItem("profileData", JSON.stringify({
          nomeCompleto: user.nome_funcionario || "",
          email: user.email || "",
          dominio: "",
        }));
      }
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updated = { ...profileData, [e.target.name]: e.target.value };
    setProfileData(updated);

    if (e.target.name === "nomeCompleto") {
      setNomeCompleto(e.target.value);   
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleCancel = () => {
    if (user) {
      const savedProfile = localStorage.getItem("profileData");
      if (savedProfile) {
        setProfileData(JSON.parse(savedProfile));
      } else {
        setProfileData({
          nomeCompleto: user.nome_funcionario || "",
          email: user.email || "",
          dominio: "",
        });
      }
    }
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
          <ProfileHeader />
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