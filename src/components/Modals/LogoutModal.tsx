import {
  Typography,
  Button,
  Dialog,
  DialogActions,
  Box,
} from "@mui/material";
import colors from "../../styles/colors";

interface LogoutModalProps {
  open: boolean;
  onClose: () => void;
  onConfirmLogout: () => void;
}

export default function LogoutModal({ open, onClose, onConfirmLogout }: LogoutModalProps) {
  const handleLogout = () => {
    onConfirmLogout();
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleCancel}
      slotProps={{
        paper: {
          sx: {
            borderRadius: "16px",
            width: "100%",
            maxWidth: 440,
          },
        },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          pt: 4,
          px: 4,
          pb: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, color: colors.primary }}
        >
          Tem certeza que deseja sair?
        </Typography>
      </Box>

      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          p: 4,
          pt: 2,
        }}
      >
        <Button
          onClick={handleLogout}
          variant="contained"
          sx={{
            backgroundColor: colors.secondary,
            color: "#fff",
            fontWeight: 600,
            borderRadius: "8px",
            px: 4,
            py: 1.2,
            minWidth: "130px",
            textTransform: "none",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: colors.secundaryDark,
            },
          }}
        >
          Sair
        </Button>

        <Button
          onClick={handleCancel}
          variant="outlined"
          sx={{
            color: colors.secondary,
            borderColor: colors.secondary,
            fontWeight: 600,
            borderRadius: "8px",
            px: 4,
            py: 1.2,
            minWidth: "130px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "rgba(255, 136, 68, 0.1)",
              borderColor: colors.secondary,
            },
          }}
        >
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
