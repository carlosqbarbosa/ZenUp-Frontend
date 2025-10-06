import { Box, Card, Typography, Button, Stack } from "@mui/material";
import Layout from "../../components/Layout/Layout";
import CheckinComparisonChart from "../../components/Charts/CheckinComparisonChart";
import colors from "../../styles/colors";

export default function Dashboard() {
  return (
    <Layout title="Dashboard">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4, p: 2 }}>
        {/* ======= Título e descrição ======= */}
        <Box>
          <Typography variant="h4" sx={{ 
            fontWeight: 700, 
            color: colors.primary 
            }}>
            Dashboard
          </Typography>
          <Typography color="text.secondary">
            Acesse as métricas agregadas para acompanhar as tendências e receba insights para cultivar uma cultura mais saudável
          </Typography>
        </Box>

        {/* ======= Linha 1 - Cards Diários e Sugestões ======= */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "2fr 1fr" },
            gap: 3,
          }}
        >
          {/* Cards Diários */}
          <Card sx={{ borderRadius: "16px", boxShadow: 2, p: 3 }}>
            <Typography variant="h6" sx={{ color: "#3F3D56", mb: 2 }}>
              Diário
            </Typography>
            <Typography color="text.secondary" mb={3}>
              Métricas de preenchimento dos dias e bla bla bla
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              {/* Check-ins do dia */}
              <Box textAlign="center">
                <Typography variant="h4" sx={{ color: "#3F51B5", fontWeight: 700 }}>
                  526
                </Typography>
                <Typography color="text.secondary">Check-ins do dia</Typography>
                <Typography variant="body2" color="#4CAF50">
                  +8% referente a ontem
                </Typography>
              </Box>

              {/* Humor médio */}
              <Box textAlign="center">
                <Typography variant="h4" sx={{ color: "#FF7043", fontWeight: 700 }}>
                  Grato
                </Typography>
                <Typography color="text.secondary">Humor médio</Typography>
                <Typography variant="body2" color="#4CAF50">
                  +8% referente a ontem
                </Typography>
              </Box>

              {/* Taxa de participação */}
              <Box textAlign="center">
                <Typography variant="h4" sx={{ color: "#3F51B5", fontWeight: 700 }}>
                  80%
                </Typography>
                <Typography color="text.secondary">Taxa de participação</Typography>
                <Typography variant="body2" color="#4CAF50">
                  +8% referente a ontem
                </Typography>
              </Box>
            </Box>
          </Card>

          {/* Sugestões de Ações */}
          <Card sx={{ borderRadius: "16px", boxShadow: 2, p: 3 }}>
            <Typography variant="h6" sx={{ color: "#3F3D56", mb: 2 }}>
              Sugestões de Ações
            </Typography>
            <Typography color="text.secondary" mb={2}>
              Medidas a serem tomadas para melhorar o clima
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Card sx={{ p: 2, backgroundColor: "#FFF3E0", borderRadius: "12px" }}>
                <Typography variant="body2" color="text.primary">
                  O humor da equipe está pedindo atenção especial. Promova uma roda de conversa de 30 minutos.
                </Typography>
              </Card>
              <Card sx={{ p: 2, backgroundColor: "#E8F5E9", borderRadius: "12px" }}>
                <Typography variant="body2" color="text.primary">
                  Nível de energia excelente! Incentive um momento de gratidão reconhecendo publicamente os esforços.
                </Typography>
              </Card>
              <Card sx={{ p: 2, backgroundColor: "#FFEBEE", borderRadius: "12px" }}>
                <Typography variant="body2" color="text.primary">
                  Estresse alto. Ofereça um workshop de 20 minutos sobre técnicas de respiração.
                </Typography>
              </Card>
            </Box>
          </Card>
        </Box>

        {/* ======= Linha 2 - Gráfico + Métricas por Humor ======= */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "2fr 1fr" },
            gap: 3,
          }}
        >
          {/* Gráfico */}
          <Card sx={{ borderRadius: "16px", boxShadow: 2, p: 3 }}>
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

          {/* Métricas por humor */}
          <Card sx={{ borderRadius: "16px", boxShadow: 2, p: 3 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
              <Box>
                <Typography variant="h6" sx={{ color: "#3F3D56" }}>
                  Métricas por humor
                </Typography>
                <Typography color="text.secondary">
                  Humor prevalescente bla bla bla
                </Typography>
              </Box>
              <Stack direction="row" spacing={1}>
                <Button variant="outlined" color="primary" size="small">
                  Mensal
                </Button>
                <Button variant="contained" color="warning" size="small">
                  Baixar
                </Button>
              </Stack>
            </Stack>

            <Box>
              <Typography variant="subtitle2" sx={{ color: "#3F3D56", mb: 1 }}>
                Sentimentos
              </Typography>
              {["Focado", "Grato", "Confiante", "Inspirado", "Frustrado", "Desanimado"].map(
                (item, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "#3F3D56",
                      mb: 0.5,
                    }}
                  >
                    <Typography>{item}</Typography>
                    <Typography>50%</Typography>
                  </Box>
                )
              )}
            </Box>
          </Card>
        </Box>
      </Box>
    </Layout>
  );
}
