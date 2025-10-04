import Layout from "../../components/Layout/Layout";
import {Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";

export default function Logout() {
  const [open, setOpen] = useState(true);

  return (
    <Layout title="Sair">
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Tem certeza que deseja sair?</DialogTitle>
        <DialogContent>
          <Typography color="text.secondary">
            Você será desconectado da plataforma ZenUp.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button color="error" variant="contained">
            Sair
          </Button>
          <Button onClick={() => setOpen(false)}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </Layout>
  );
}
