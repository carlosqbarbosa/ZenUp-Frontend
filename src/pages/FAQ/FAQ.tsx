import Layout from "../../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import FaqSection from "../../components/Support/FaqSection";
import ContactForm from "../../components/Support/ContactForm";
import colors from "../../styles/colors"; 

export default function Suporte() {
    return (
        <Layout title="Central de Ajuda">
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: colors.primary }}>
                Central de Ajuda
            </Typography>

            {/* Layout principal em duas colunas */}
            <Box 
                sx={{ 
                    display: "flex",
                    gap: 4,
                    width: "100%",
                    maxWidth: 1200,
                    flexDirection: { xs: "column", md: "row" },
                    flexGrow: 1,
                    overflow: "visible",
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