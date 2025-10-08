import { 
    Box, TextField, Button, Typography, Select, MenuItem, 
    FormControl, Snackbar, Alert
} from "@mui/material"; // Adicionamos Snackbar e Alert
import React, { useState } from 'react'; // Importamos useState
// Substitua pelo caminho correto do seu objeto de cores
import colors from "../../styles/colors"; 

const categories = [
    "Problema no Login",
    "Dúvidas sobre Relatórios",
    "Gerenciamento de Colaboradores",
    "Sugestões e Outros",
];

const ContactForm = () => {
    // Estado para controlar a exibição da Snackbar (notificação)
    const [openSnackbar, setOpenSnackbar] = useState(false);

    // Handler para simular o envio do formulário
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui você faria a chamada à API (axios.post('/api/suporte', dados)).
        
        // Se a chamada à API for bem-sucedida, mostramos a Snackbar
        setOpenSnackbar(true);

        // Opcional: Limpar o formulário aqui após o envio
        // setFormData(initialFormData); 
    };

    // Handler para fechar a Snackbar
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
            
            {/* 1. Entre em Contato (Email) - Mantido */}
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

            {/* 2. Formulário de Suporte */}
            <Box 
                component="form" // Adiciona o componente form para usar o onSubmit
                onSubmit={handleSubmit} // Chama a função handleSubmit ao enviar
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
                
                {/* Campos (Assunto, Categoria, Descrição) - Mantidos */}
                {/* ... */}
                
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2, mb: 0.5 }}>
                    Assunto
                </Typography>
                <TextField 
                    fullWidth 
                    placeholder="Ex: Problema no login" 
                    sx={{ mb: 2 }} 
                    size="small"
                    required // Garante que o campo será preenchido
                />
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                    Categoria
                </Typography>
                <FormControl fullWidth size="small" sx={{ mb: 2 }}>
                    <Select defaultValue="" required>
                        <MenuItem value="" disabled>Selecione uma categoria</MenuItem>
                        {categories.map((cat) => (
                            <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
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
                    type="submit" // Define como botão de submissão do formulário
                    variant="contained" 
                    sx={{ 
                        backgroundColor: colors.secondary, 
                        '&:hover': { backgroundColor: '#e56417' },
                        py: 1.5,
                        borderRadius: '12px',
                        fontWeight: 600,
                        textTransform: 'none'
                    }}
                >
                    Enviar
                </Button>
            </Box>

            {/* 3. SNACKBAR DE SUCESSO */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000} // Tempo que a mensagem fica na tela (6 segundos)
                onClose={handleClose}
                // Posição: Topo e Direita, como no Figma
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert
                    onClose={handleClose}
                    severity="success" // Cor verde de sucesso
                    variant="filled" // Fundo preenchido para melhor visibilidade
                    sx={{ width: '100%', bgcolor: colors.greenSuccess }} // Ajuste de cor opcional
                >
                    Mensagem para o suporte enviada com sucesso
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default ContactForm;