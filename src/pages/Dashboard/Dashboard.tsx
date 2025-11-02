import { Box, Typography, Card } from "@mui/material";
import Layout from "../../components/Layout/Layout";
import DailyMetricsCard from "../../components/DashboardCards/DailyMetricsCard";
import SuggestionsCard from "../../components/DashboardCards/SuggestionsCard";
import MetricaPorHumor from "../../components/DashboardCards/MoodMetricsCard";
import CheckinComparisonChart from "../../components/Charts/CheckinComparisonChart";
import colors from "../../styles/colors";

export default function Dashboard() {
  return (
    <Layout title="Dashboard">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          p: { xs: 2, sm: 3, md: 4 },
          width: "100%",
          maxWidth: "100vw",
          overflowX: "hidden",
          boxSizing: "border-box",
        }}
      >
        {/* Cabeçalho */}
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: colors.primary,
              fontSize: { xs: "1.75rem", sm: "2rem", md: "2.25rem" },
            }}
          >
            Dashboard
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem" },
              maxWidth: "800px",
            }}
          >
            Acompanhe as métricas agregadas e receba insights para cultivar uma
            cultura organizacional mais saudável.
          </Typography>
        </Box>

        {/* Linha 1: Métricas e Sugestões */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "2fr 1fr" },
            gap: { xs: 2, sm: 3 },
          }}
        >
          <DailyMetricsCard />
          <SuggestionsCard />
        </Box>

        {/* Linha 2: Gráfico e Métrica por Humor */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "2fr 1fr" },
            gap: { xs: 2, sm: 3 },
          }}
        >
          <Card
            sx={{
              borderRadius: "20px",
              p: { xs: 1, sm: 2 },
              boxShadow: "none",
              background: "transparent",
              width: "100%",
              minHeight: { xs: 300, sm: 400 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            <CheckinComparisonChart />
          </Card>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <MetricaPorHumor />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
