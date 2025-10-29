import { Box, Typography, Card, Stack, Button } from "@mui/material";
import Layout from "../../components/Layout/Layout";
import DailyMetricsCard from "../../components/DashboardCards/DailyMetricsCard";
import SuggestionsCard from "../../components/DashboardCards/SuggestionsCard";
import MetricaPorHumor from "../../components/DashboardCards/MoodMetricsCard";
import CheckinComparisonChart from "../../components/Charts/CheckinComparisonChart";
import colors from "../../styles/colors";

export default function Dashboard() {
  return (
    <Layout title="Dashboard">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4, p: 2 }}>
        {/* Header */}
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700, color: colors.primary }}>
            Dashboard
          </Typography>
          <Typography color="text.secondary">
            Acompanhe as métricas agregadas e receba insights para cultivar uma
            cultura organizacional mais saudável.
          </Typography>
        </Box>

        {/* Linha 1 */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "2fr 1fr" },
            gap: 3,
          }}
        >
          <DailyMetricsCard />
          <SuggestionsCard />
        </Box>

        {/* Linha 2 */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "2fr 1fr" },
            gap: 3,
          }}
        >
          <Card
            sx={{
              borderRadius: "20px",
              p: 3,
              boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
            }}
          >
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
              <Stack direction="row" spacing={1}>
                <Button variant="outlined" color="primary" size="small">
                  Mensal
                </Button>
                <Button variant="contained" color="warning" size="small">
                  Baixar
                </Button>
              </Stack>
            </Stack>
            <CheckinComparisonChart />
          </Card>

          <MetricaPorHumor />
        </Box>
      </Box>
    </Layout>
  );
}
