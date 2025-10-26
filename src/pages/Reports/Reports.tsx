import { useState, useRef } from "react";
import { Box, Typography, MenuItem, Select, Button } from "@mui/material";
import Layout from "../../components/Layout/Layout";
import colors from "../../styles/colors";
import DownloadSuccessModal from "../../components/Modals/DownloadSuccessModal";
import Dashboard from "../Dashboard/Dashboard";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ReportsPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dashboardRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!selectedCategory) {
      alert("Selecione uma categoria antes de baixar!");
      return;
    }

    try {
      const element = dashboardRef.current;
      if (!element) return;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
      });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = (canvas.height * pageWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight);
      pdf.save(`Relatório-${selectedCategory}.pdf`);

      setIsModalOpen(true);
      setTimeout(() => setIsModalOpen(false), 3000);
    } catch (err) {
      console.error("Erro ao gerar PDF:", err);
      alert("Ocorreu um erro ao gerar o relatório.");
    }
  };

  return (
    <Layout>
      <Box sx={{ maxWidth: 900, mx: "auto" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, color: colors.primary, mb: 1 }}
        >
          Baixar relatório
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 4 }}>
          Tenha acesso aos seus relatórios em PDF de forma rápida e prática.
        </Typography>

        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "16px",
            p: 4,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: colors.primary, mb: 1 }}
          >
            Relatórios
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Escolha seus relatórios
          </Typography>

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
              <em
                style={{
                  color: "rgba(0, 0, 0, 0.5)",
                  fontStyle: "normal",
                }}
              >
                Selecione uma categoria
              </em>
            </MenuItem>
            <MenuItem value="Comparação de Registro Mensal">
              Comparação de Registro Mensal
            </MenuItem>
            <MenuItem value="Métricas por Humor">Métricas por Humor</MenuItem>
            <MenuItem value="Preenchimento Diário">Preenchimento Diário</MenuItem>
            <MenuItem value="Todos">Todos</MenuItem>
          </Select>

          <Button
            variant="contained"
            onClick={handleDownload}
            sx={{
              backgroundColor: colors.primary,
              borderRadius: "8px",
              fontWeight: 600,
              textTransform: "none",
              width: "100%",
              py: 1.5,
              "&:hover": { backgroundColor: colors.primaryDark },
            }}
          >
            Baixar
          </Button>
        </Box>
      </Box>
      <Box
        ref={dashboardRef}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0,
          pointerEvents: "none",
          width: "210mm",
        }}
      >
        <Dashboard />
      </Box>
      
      <DownloadSuccessModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Layout>
  );
}
