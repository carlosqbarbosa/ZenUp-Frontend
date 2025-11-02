import { useState, useRef } from "react";
import { Box, Typography, Card, Button, IconButton } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import colors from "../../styles/colors";
import { moodMetricsMock } from "../../data/moodMetrics";

export default function MetricaPorHumor() {
  const { sentimentos, energia, estresse } = moodMetricsMock;

  const metricas = [
    { titulo: "Sentimentos", cor: colors.secondary, lista: sentimentos },
    { titulo: "Energia", cor: colors.primary, lista: energia },
    { titulo: "Estresse", cor: colors.error, lista: estresse },
  ];

  const [indexAtual, setIndexAtual] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setIndexAtual((prev) => (prev === 0 ? metricas.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndexAtual((prev) => (prev === metricas.length - 1 ? 0 : prev + 1));
  };

  // 🔽 Função de Download (baseada na ReportsPage)
  const handleDownload = async () => {
    try {
      const element = cardRef.current;
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
      pdf.save(`Relatório - ${metricas[indexAtual].titulo}.pdf`);
    } catch (err) {
      console.error("Erro ao gerar PDF:", err);
      alert("Ocorreu um erro ao gerar o relatório.");
    }
  };

  const renderColuna = (titulo: string, cor: string, lista: any[]) => (
    <Box
      sx={{
        flex: 1,
        border: `1.5px solid ${cor}`,
        borderRadius: "12px",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        backgroundColor: colors.white,
        boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: cor }}>
          {titulo}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: cor }}>
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
            <Typography variant="body2" sx={{ fontWeight: 600, color: cor }}>
              {item.valor}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );

  return (
    <Card
      ref={cardRef} // 🔹 Elemento que será capturado no PDF
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
          flexWrap: "wrap",
          gap: 2,
          mb: 3,
        }}
      >
        <Box sx={{ flex: "1 1 280px", minWidth: "250px" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, color: colors.primary, mb: 0.5 }}
          >
            Métricas por humor
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: colors.textGray,
              lineHeight: 1.4,
              maxWidth: "300px",
            }}
          >
            Humor prevalecente e distribuição emocional dos colaboradores
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 1.5,
            flexShrink: 0,
          }}
        >
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            onClick={handleDownload} // ⬅️ Baixar o PDF
            sx={{
              textTransform: "none",
              borderRadius: "12px",
              borderColor: colors.secondary,
              color: colors.secondary,
              fontWeight: 500,
              px: 2.5,
              "&:hover": {
                backgroundColor: "rgba(255,107,53,0.08)",
                borderColor: colors.secondary,
              },
            }}
          >
            Baixar
          </Button>
          <Button
            variant="outlined"
            startIcon={<CalendarMonthIcon />}
            sx={{
              borderColor: colors.primary,
              color: colors.primary,
              fontWeight: 600,
              textTransform: "none",
              borderRadius: "10px",
              px: 2.5,
              py: 1,
              "&:hover": {
                backgroundColor: "rgba(67, 53, 167, 0.05)",
                borderColor: colors.primaryDark,
              },
            }}
          >
            Mensal
          </Button>
        </Box>
      </Box>

      {/* Carrossel */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: -20,
            color: colors.primary,
            "&:hover": { backgroundColor: "rgba(67, 53, 167, 0.05)" },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        <Box
          sx={{
            width: "80%",
            transition: "transform 0.5s ease",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {renderColuna(
            metricas[indexAtual].titulo,
            metricas[indexAtual].cor,
            metricas[indexAtual].lista
          )}
        </Box>

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: -20,
            color: colors.primary,
            "&:hover": { backgroundColor: "rgba(67, 53, 167, 0.05)" },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      {/* Indicadores */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
          gap: 1,
        }}
      >
        {metricas.map((_, i) => (
          <Box
            key={i}
            onClick={() => setIndexAtual(i)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor:
                i === indexAtual ? colors.primary : "rgba(0,0,0,0.2)",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </Box>
    </Card>
  );
}