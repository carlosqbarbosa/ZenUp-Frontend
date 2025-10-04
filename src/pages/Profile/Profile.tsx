import Layout from "../../components/Layout/Layout";
import { Box, TextField, Avatar, Button } from "@mui/material";

export default function Perfil() {
  return (
    <Layout title="Meu Perfil">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          width: "100%",
          maxWidth: 600,
        }}
      >
        <Avatar sx={{ width: 80, height: 80 }} src="https://i.pravatar.cc/150" />
        <TextField label="Nome completo" fullWidth />
        <TextField label="Email" fullWidth />
        <TextField label="Telefone" fullWidth />
        <Button variant="contained">Salvar alterações</Button>
      </Box>
    </Layout>
  );
}
