import Layout from "../../components/Layout/Layout";
import { Box, Typography, useMediaQuery } from "@mui/material";
import FaqSection from "../../components/Support/FaqSection";
import ContactForm from "../../components/Support/ContactForm";
import colors from "../../styles/colors";

export default function Suporte() {
  const isSm = useMediaQuery("(max-width:900px)"); 
  return (
    <Layout title="Central de Ajuda">
      <Box
        sx={{
          width: "100%",
          maxWidth: 1200,
          mx: "auto",
          px: { xs: 2, sm: 3 },
          py: { xs: 3, md: 5 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: { xs: 3, md: 4 },
            color: colors.primary,
            fontSize: { xs: "1.6rem", sm: "2rem" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Central de Ajuda
        </Typography>

        {/* Layout principal responsivo */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isSm ? "column" : "row",
            gap: { xs: 3, md: 4 },
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          {/* Coluna Esquerda - FAQ */}
          <Box sx={{ flex: 1, width: "100%" }}>
            <FaqSection />
          </Box>

          {/* Coluna Direita - Formulário */}
          <Box sx={{ flex: 1, width: "100%" }}>
            <ContactForm />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
