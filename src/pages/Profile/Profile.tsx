import Layout from "../../components/Layout/Layout";
import { Grid, Box } from "@mui/material";
import { useState } from "react";
import React from "react"; 

import type { ProfileData } from "../../types/profile";
import ProfileForm from "../../components/Profile/ProfileForm"; 
import ProfileHeader from "../../components/Profile/ProfileHeader";
import colors from "../../styles/colors";

const initialProfileData: ProfileData = {
    nomeCompleto: "Felipe Gusmão Pereira",
    email: "felipe.gusmao",
    telefone: "+55 11 99999-9999",
    dominio: "@zenup.com",
    estado: "Pernambuco",
    cidade: "Recife",
    foto: "",
};

export default function Perfil() {
    const [profileData, setProfileData] = useState<ProfileData>(initialProfileData);
    const [savedData, setSavedData] = useState<ProfileData>(initialProfileData);
    const [isEditing, setIsEditing] = useState(false); 

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement> | { target: { name: string; value: string } }
        ) => {
        setProfileData({ ...profileData, [e.target.name]: e.target.value });
        };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Dados do perfil salvos:", profileData);
        setSavedData(profileData);
        setIsEditing(false); 
    };
    
    const handleCancel = () => {
        setProfileData(savedData); 
        setIsEditing(false); 
    };

    return (
        <Layout title="Meu Perfil">
            <Box sx={{ p: 0, width: "100%", maxWidth: 1200, color: colors.primary  }}>
                
                <ProfileHeader />

                <Grid 
                    container 
                    spacing={4} 
                    sx={{ 
                        width: "100%", 
                        maxWidth: 1200, 
                        height: 'fit-content' 
                    }}
                >
                    {/* COLUNA ESQUERDA: FORMULÁRIO */}
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