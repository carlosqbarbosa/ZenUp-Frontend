import { 
    Box, TextField, Button, Typography, Select, MenuItem, 
    FormControl, Snackbar, Alert
} from "@mui/material"; 
import React, { useState } from 'react'; 
import colors from "../../styles/colors"; 

const categories = [
    "Problema no Login",
    "Dúvidas sobre Relatórios",
    "Gerenciamento de Colaboradores",
    "Sugestões e Outros",
];

const ContactForm = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setOpenSnackbar(true);

 
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
            
            <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: colors.text }}>
                    Entre em Contato
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Nossa equipe está pronta para ajudar você.
                </Typography>
                <Box
                    sx={{
                        p: 1.5,
                        backgroundColor: '#fff', 
                        borderRadius: '8px', 
                        border: '1px solid #ddd',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                    }}
                >
                    <Typography color="text.secondary" sx={{ fontWeight: 500 }}>
                        Email
                    </Typography>
                    <Typography sx={{ color: colors.text, fontWeight: 500 }}>
                        suporte@zenup.com
                    </Typography>
                </Box>
            </Box>

            <Box 
                component="form" 
                onSubmit={handleSubmit} 
                sx={{ 
                    p: 3,
                    backgroundColor: '#fff', 
                    borderRadius: '16px', 
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #eee'
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: colors.primary }}>
                    Precisa de ajuda? Fale com o suporte
                </Typography>
                
                
                <Typography variant="body2" sx={{ mt: 2, mb: 0.5, color: colors.primary }}>
                    Assunto
                </Typography>
                <TextField 
                    fullWidth 
                    placeholder="Ex: Problema no login" 
                    sx={{ mb: 2 }} 
                    size="small"
                    required 
                />
                
                <Typography variant="body2" sx={{ mb: 0.5, color: colors.primary }}>
                    Categoria
                </Typography>
                <FormControl fullWidth size="small" sx={{ mb: 2 }}>
                    <Select defaultValue="" required displayEmpty>
                        <MenuItem value="">
                            <em style={{ color: "rgba(0, 0, 0, 0.5)", fontStyle: "normal" }}>
                            Selecione uma categoria
                            </em>
                        </MenuItem>
                        {categories.map((cat) => (
                            <MenuItem key={cat} value={cat}>
                            {cat}
                            </MenuItem>
                        ))}
                        </Select>
                </FormControl>
                
                <Typography variant="body2" sx={{ mb: 0.5, color: colors.primary }}>
                    Descrição
                </Typography>
                <TextField 
                    fullWidth 
                    multiline 
                    rows={4} 
                    placeholder="Descreva detalhadamente o problema ou solicitação..." 
                    sx={{ mb: 3 }} 
                    required
                />

                <Button 
                    type="submit" 
                    variant="contained" 
                    fullWidth
                    sx={{ 
                        backgroundColor: colors.primary, 
                        '&:hover': { backgroundColor: colors.primaryDark },
                        py: 1.5,
                        borderRadius: '12px',
                        fontWeight: 600,
                        textTransform: 'none',
                        mt: 2
                    }}
                >
                    Enviar
                </Button>
            </Box>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000} 
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert
                    onClose={handleClose}
                    severity="success" 
                    variant="filled" 
                    sx={{ width: '100%', bgcolor: colors.greenSuccess }} 
                >
                    Mensagem para o suporte enviada com sucesso
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default ContactForm;