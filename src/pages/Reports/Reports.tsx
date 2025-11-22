import { useState, useRef, useEffect } from "react";
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
  const [isGenerating, setIsGenerating] = useState(false);
  const dashboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.history.replaceState(null, "", "/reports");
  }, []);

  const handleDownload = async () => {
    if (!selectedCategory) {
      alert("Selecione uma categoria antes de baixar!");
      return;
    }

    setIsGenerating(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 150));

      const element = dashboardRef.current;
      if (!element) {
        console.error("Elemento do dashboard não encontrado");
        return;
      }

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        width: element.scrollWidth,
        height: element.scrollHeight,
      });

      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = (canvas.height * pageWidth) / canvas.width;

      let y = 0;
      while (y < pageHeight) {
        pdf.addImage(imgData, "PNG", 0, -y, pageWidth, pageHeight);
        y += pdf.internal.pageSize.getHeight();
        if (y < pageHeight) pdf.addPage();
      }

      pdf.save(`Relatório-${selectedCategory}.pdf`);

      setIsModalOpen(true);
      setTimeout(() => setIsModalOpen(false), 3000);

    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
    } finally {
      setIsGenerating(false);
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
              <em style={{ color: "rgba(0,0,0,0.5)", fontStyle: "normal" }}>
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
            disabled={isGenerating}
            sx={{
              backgroundColor: colors.primary,
              borderRadius: "8px",
              fontWeight: 600,
              width: "100%",
              py: 1.5,
              textTransform: "none",
              "&:hover": { backgroundColor: colors.primaryDark },
            }}
          >
            {isGenerating ? "Gerando PDF..." : "Baixar"}
          </Button>
        </Box>
      </Box>

        {isGenerating && (
          <Box
            ref={dashboardRef}
            sx={{
              position: "fixed",
              top: "-20000px",
              left: "-20000px",
              zIndex: -1,
              pointerEvents: "none",
              width: "1200px",
              backgroundColor: "#fff",
            }}
          >
            <Dashboard filter={selectedCategory} />
          </Box>
        )}

      <DownloadSuccessModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Layout>
  );
}
