import { useRef, useEffect, useState } from "react";
import {
  Box,
  Card,
  Typography,
  CircularProgress,
  Stack,
  Button,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import MoodIcon from "@mui/icons-material/Mood";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupIcon from "@mui/icons-material/Group";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import colors from "../../styles/colors";
import { getDailyMetrics } from "../../services/dailyMetricsService";
import type { DailyMetric } from "../../services/dailyMetricsService";
export default function DailyMetricsCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [metrics, setMetrics] = useState<DailyMetric[]>([]);
  const [loading, setLoading] = useState(true);

  const handleDownload = async () => {
    try {
      const element = cardRef.current;
      if (!element) return;
      const canvas = await html2canvas(element, { scale: 2, useCORS: true });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = (canvas.height * pageWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight);
      pdf.save("Relatório - Métricas Diárias.pdf");
    } catch (err) {
      console.error("Erro ao gerar PDF:", err);
    }
  };

  // Busca os dados (da API ou mock)
  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const data = await getDailyMetrics();
        setMetrics(data);
      } catch (error) {
        console.error("Erro ao buscar métricas diárias:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMetrics();
  }, []);

  const iconMap: Record<string, JSX.Element> = {
    "Check-ins": (
      <InsertChartIcon sx={{ color: "#4335A7", mb: 1, fontSize: "32px" }} />
    ),
    "Humor médio": (
      <MoodIcon sx={{ color: "#FF6B35", mb: 1, fontSize: "32px" }} />
    ),
    "Participação": (
      <GroupIcon sx={{ color: "#00B894", mb: 1, fontSize: "32px" }} />
    ),
  };

  if (loading) {
    return (
      <Card
        sx={{
          borderRadius: "24px",
          p: 4,
          textAlign: "center",
          backgroundColor: colors.white,
          boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
        }}
      >
        <CircularProgress />
        <Typography sx={{ mt: 2 }}>Carregando Cards para as métricas Diárias...</Typography>
      </Card>
    );
  }

  return (
    <Card
      ref={cardRef}
      sx={{
        borderRadius: "24px",
        p: 4,
        backgroundColor: colors.white,
        boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 4,
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{ color: colors.primary, fontWeight: 700 }}
          >
            Diário
          </Typography>
          <Typography color="text.secondary">
            Métricas de preenchimento dos dias
          </Typography>
        </Box>

          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              startIcon={<DownloadIcon />}
              onClick={handleDownload}
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
                textTransform: "none",
                borderRadius: "12px",
                borderColor: colors.primary,
                color: colors.primary,
                fontWeight: 500,
                px: 2.5,
                "&:hover": {
                  backgroundColor: "rgba(92,70,249,0.08)",
                  borderColor: colors.primary,
                },
              }}
            >
              Mensal
            </Button>
          </Stack>
      </Box>

      {/* Cards */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 3,
          flexWrap: "wrap",
        }}
      >
        {metrics.map((item) => (
          <Box
            key={item.nome}
            sx={{
              flex: 1,
              p: 3,
              borderRadius: "16px",
              backgroundColor: `${item.cor}1A`,
              textAlign: "center",
              minWidth: "200px",
            }}
          >
            {iconMap[item.nome]}
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, color: colors.text }}
            >
              {item.valor}
              {item.nome === "Participação" && (
                <Typography
                  component="span"
                  sx={{ fontSize: "1rem", color: colors.textGray }}
                >
                  %
                </Typography>
              )}
            </Typography>

            <Typography color="text.secondary" sx={{ mt: 0.5 }}>
              {item.descricao}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color:
                  item.variacao >= 0
                    ? colors.greenSuccess
                    : colors.error,
              }}
            >
              {item.variacao >= 0 ? "+" : ""}
              {item.variacao}% referente a ontem
            </Typography>
          </Box>
        ))}
      </Box>
    </Card>
  );
}
