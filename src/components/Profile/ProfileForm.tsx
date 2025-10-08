import { Box, TextField, Button, Typography, Grid } from "@mui/material";
// Substitua pelo caminho correto do seu objeto de cores
import colors from "../../styles/colors"; 
import React from "react";
// IMPORTAÇÃO CORRIGIDA DE TIPOS
import type { ProfileFormProps } from "../../types/profile"; 

// Estilo customizado para os TextFields: Sem Outline, só a borda inferior.
const CustomTextFieldStyle = {
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
    '& .MuiOutlinedInput-root': {
        padding: '8px 0',
        borderBottom: '1px solid #ddd',
        borderRadius: '0', 
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.primary,
        },
        '& legend': {
            display: 'none',
        },
        '& fieldset': {
            top: 0,
        },
        '&.Mui-disabled': {
            backgroundColor: '#fafafa',
            borderBottomColor: '#ccc',
        },
    },
    '& .MuiInputBase-input': {
        padding: '0 0 8px 0', 
        fontSize: '1rem',
    }
};

// Componente auxiliar para padronizar o label de cada campo
const InputWrapper: React.FC<{ label: string, children: React.ReactNode }> = ({ label, children }) => (
    <Box sx={{ width: '100%', mb: 2 }}>
        <Typography 
            variant="caption" 
            sx={{ 
                fontWeight: 500, 
                mb: 0.5, 
                display: 'block', 
                color: colors.textGray 
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
    onChange 
}) => {

    return (
        <Box
            component="form"
            onSubmit={onSave}
            sx={{ 
                p: 4,
                backgroundColor: "#fff",
                borderRadius: "16px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                height: '100%',
            }}
        >
            {/* TÍTULO E SUBTÍTULO DO GRUPO DE CAMPOS */}
            <Typography variant="h6" sx={{ fontWeight: 600, color: colors.text }}>
                Informações Pessoais
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 3 }}>
                Suas informações básicas e de contato.
            </Typography>

            {/* Sub-Grid para os campos de formulário */}
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
                            value={profileData.dominio}
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
                            value={profileData.estado}
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
                            value={profileData.cidade}
                            onChange={onChange}
                            sx={CustomTextFieldStyle}
                            variant="outlined"
                            disabled={!isEditing}
                        />
                    </InputWrapper>
                </Grid>
            </Grid>
            
            {/* BOTÕES DE AÇÃO */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mt: 4, pt: 2, gap: 2 }}>
              
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
                    }}
                >
                    Editar Perfil
                </Button>
              ) : (
                <>
                    <Button 
                        variant="outlined"
                        onClick={onCancel}
                        sx={{
                            color: colors.textGray,
                            borderColor: colors.textGray,
                            borderRadius: "12px",
                            textTransform: "none",
                            fontWeight: 600,
                        }}
                    >
                        Cancelar
                    </Button>
                    <Button
                        variant="contained"
                        type="submit"
                        sx={{
                            height: 48,
                            borderRadius: "12px",
                            textTransform: "none",
                            fontWeight: 600,
                        }}
                    >
                        Salvar alterações
                    </Button>
                </>
              )}
            </Box>
        </Box>
    );
};

export default ProfileForm;
