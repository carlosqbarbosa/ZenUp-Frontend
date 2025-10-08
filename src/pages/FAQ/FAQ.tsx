import Layout from "../../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import FaqSection from "../../components/Support/FaqSection";
import ContactForm from "../../components/Support/ContactForm";

export default function Suporte() {
    return (
        <Layout title="Central de Ajuda">
            {/* Header da Página */}
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
                Central de Ajuda
            </Typography>

            {/* Layout principal em duas colunas */}
            <Box 
                sx={{ 
                    display: "flex", 
                    gap: 4, 
                    width: '100%', 
                    maxWidth: 1200, // Limita a largura como no perfil
                    flexDirection: { xs: 'column', md: 'row' } // Colunas em telas grandes
                }}
            >
                {/* Coluna Esquerda: Perguntas Frequentes */}
                <FaqSection />

                {/* Coluna Direita: Contato e Formulário */}
                <ContactForm />
            </Box>
        </Layout>
    );
}