import { Box, Typography, Card, Button, Grid } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import colors from "../../styles/colors";

export default function MetricaPorHumor() {
  const sentimentos = [
    { nome: "Focado", valor: 30 },
    { nome: "Grato", valor: 20 },
    { nome: "Confiante", valor: 5 },
    { nome: "Inspirado", valor: 50 },
    { nome: "Frustrado", valor: 50 },
    { nome: "Desanimado", valor: 50 },
  ];

  const energia = [
    { nome: "Energizado", valor: 50 },
    { nome: "Alta", valor: 50 },
    { nome: "Moderada", valor: 5 },
    { nome: "Baixa", valor: 20 },
    { nome: "Esgotada", valor: 30 },
  ];

  const estresse = [
    { nome: "Relaxado", valor: 30 },
    { nome: "Calmo", valor: 20 },
    { nome: "Moderado", valor: 5 },
    { nome: "Estressado", valor: 50 },
    { nome: "Muito estressado", valor: 50 },
  ];

  const renderColuna = (titulo: string, cor: string, lista: any[]) => (
    <Box
      sx={{
        flex: 1,
        border: `1px solid ${cor}`,
        borderRadius: "12px",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        backgroundColor: colors.white,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 1,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 700, color: cor }}
        >
          {titulo}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 700, color: cor }}
        >
          %
        </Typography>
      </Box>

      {lista.map((item) => (
        <Box
          key={item.nome}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 0.5,
          }}
        >
          <Typography variant="body2" sx={{ color: colors.textGray }}>
            {item.nome}
          </Typography>
          <Box
            sx={{
              border: `1px solid ${cor}`,
              borderRadius: "6px",
              px: 1.5,
              py: 0.2,
              minWidth: 40,
              textAlign: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: cor }}
            >
              {item.valor}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );

  return (
    <Card
      sx={{
        borderRadius: "20px",
        p: 3,
        backgroundColor: colors.white,
        boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
      }}
    >
      {/* Cabeçalho */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, color: colors.primary }}
          >
            Métricas por humor
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: colors.textGray, fontSize: "0.85rem" }}
          >
            humor prevalescente bla bla bla
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="outlined"
            startIcon={<FileDownloadIcon />}
            sx={{
              borderColor: colors.secondary,
              color: colors.secondary,
              fontWeight: 600,
              textTransform: "none",
              borderRadius: "12px",
              "&:hover": {
                borderColor: colors.secundaryDark,
                backgroundColor: "rgba(255, 127, 62, 0.05)",
              },
            }}
          >
            Baixar
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: colors.primary,
              color: colors.primary,
              fontWeight: 600,
              textTransform: "none",
              borderRadius: "12px",
              "&:hover": {
                borderColor: colors.primaryDark,
                backgroundColor: "rgba(67, 53, 167, 0.05)",
              },
            }}
          >
            Mensal
          </Button>
        </Box>
      </Box>

      {/* Colunas */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          {renderColuna("Sentimentos", colors.secondary, sentimentos)}
        </Grid>
        <Grid item xs={12} md={4}>
          {renderColuna("Energia", colors.primary, energia)}
        </Grid>
        <Grid item xs={12} md={4}>
          {renderColuna("Estresse", colors.error, estresse)}
        </Grid>
      </Grid>
    </Card>
  );
}
