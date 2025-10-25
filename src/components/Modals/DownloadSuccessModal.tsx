import { Dialog, Typography, Button, Box } from "@mui/material";
import colors from "../../styles/colors";

interface DownloadSuccessModalProps {
  open: boolean;
  onClose: () => void;
}

export default function DownloadSuccessModal({
  open,
  onClose,
}: DownloadSuccessModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            borderRadius: "16px",
            width: "100%",
            maxWidth: 440,
            textAlign: "center",
            p: 4,
          },
        },
      }}
    >
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, color: colors.primary, mb: 3 }}
        >
          Relatório foi baixado com sucesso.
        </Typography>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{
            backgroundColor: colors.secondary,
            color: "#fff",
            fontWeight: 600,
            borderRadius: "8px",
            px: 4,
            py: 1.2,
            textTransform: "none",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: colors.secundaryDark,
            },
          }}
        >
          Fechar
        </Button>
      </Box>
    </Dialog>
  );
}
