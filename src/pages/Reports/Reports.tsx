import { Box, Typography, MenuItem, Select, Button } from "@mui/material";
import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import colors from "../../styles/colors";

export default function ReportsPage() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleDownload = () => {
    if (selectedCategory) {
      alert(`Baixando relatório da categoria: ${selectedCategory}`);
    } else {
      alert("Selecione uma categoria antes de baixar!");
    }
  };

  return (
    <Layout>
      <Box sx={{ maxWidth: 900, mx: "auto" }}>
        {/* Título principal */}
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, color: colors.primary, mb: 1 }}
        >
          Baixar relatório
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 4 }}>
          Tenha acesso aos seus relatórios em PDF de forma rápida e prática.
        </Typography>

        {/* Card de conteúdo */}
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "16px",
            p: 4,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, color: colors.primary, mb: 1 }}>
            Relatórios
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Escolha seus relatórios
          </Typography>

          {/* Filtro */}
          <Typography variant="body2" sx={{ color: colors.textGray, mb: 1 }}>
            Filtro
          </Typography>
          <Select
            fullWidth
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            displayEmpty
            sx={{
              mb: 3,
              borderRadius: "8px",
              "& fieldset": { borderColor: "#ddd" },
            }}
          >
            <MenuItem value="">
                <em style={{color: "rgba(0, 0, 0, 0.5)", fontStyle: "normal"}}>Selecione uma categoria</em>
            </MenuItem>
            <MenuItem value="Registro mensal">Comparação de Registro Mensal</MenuItem>
            <MenuItem value="Metricas por humor">Métricas por Humor</MenuItem>
            <MenuItem value="Preenchimento diário">Preenchimento diário</MenuItem>
            <MenuItem value="Todos">Todos</MenuItem>
          </Select>

          <Button
            variant="contained"
            onClick={handleDownload}
            sx={{
              backgroundColor: "#ff7a2d",
              borderRadius: "8px",
              fontWeight: 600,
              textTransform: "none",
              width: "100%",
              py: 1.5,
              "&:hover": {
                backgroundColor: "#e56b22",
              },
            }}
          >
            Baixar
          </Button>
        </Box>
      </Box>
    </Layout>
  );
}
