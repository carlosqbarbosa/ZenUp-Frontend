import Layout from "../../components/Layout/Layout";
import { Box, TextField, Button, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Faq() {
  return (
    <Layout title="Central de Ajuda">
      <Box sx={{ display: "flex", gap: 4 }}>
        <Box sx={{ flex: 1 }}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Como faço login?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Use seu email e senha cadastrados.</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Como redefinir minha senha?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Vá em “Esqueceu a senha?” na tela de login.</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Fale com o suporte
          </Typography>
          <TextField fullWidth label="Assunto" sx={{ mb: 2 }} />
          <TextField fullWidth label="Descrição" multiline rows={4} sx={{ mb: 2 }} />
          <Button variant="contained">Enviar</Button>
        </Box>
      </Box>
    </Layout>
  );
}
