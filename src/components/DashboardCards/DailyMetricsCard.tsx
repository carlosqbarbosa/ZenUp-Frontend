import { Box, Typography, Card, IconButton } from "@mui/material";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import MoodIcon from "@mui/icons-material/Mood";
import GroupIcon from "@mui/icons-material/Group";
import DownloadIcon from "@mui/icons-material/FileDownloadOutlined";
import colors from "../../styles/colors";
import { dailyMetricsMock } from "../../data/dailyMetrics";


export default function DailyMetricsCard() {
  const { checkins, humor, participacao } = dailyMetricsMock;

  return (
    <Card
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

        <IconButton
          sx={{
            color: colors.secondary,
            border: `1px solid ${colors.secondary}`,
            borderRadius: "10px",
            px: 2,
            py: 0.5,
            fontSize: "0.9rem",
          }}
        >
          <Typography sx={{ mr: 0.5, fontWeight: 500 }}>Baixar</Typography>
          <DownloadIcon sx={{ fontSize: "18px" }} />
        </IconButton>
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
        {/* Check-ins */}
        <Box
          sx={{
            flex: 1,
            p: 3,
            borderRadius: "16px",
            backgroundColor: colors.purpleLight,
            textAlign: "center",
          }}
        >
          <InsertChartIcon
            sx={{ color: colors.primary, mb: 1, fontSize: "32px" }}
          />
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, color: colors.text }}
          >
            {checkins}
            <Typography
              component="span"
              sx={{ fontSize: "1rem", color: colors.textGray }}
            >
              /1000
            </Typography>
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 0.5 }}>
            Check-ins do dia
          </Typography>
          <Typography variant="body2" sx={{ color: colors.greenSuccess }}>
            +8% referente a ontem
          </Typography>
        </Box>

        {/* Humor */}
        <Box
          sx={{
            flex: 1,
            p: 3,
            borderRadius: "16px",
            backgroundColor: colors.orangeBackground,
            textAlign: "center",
          }}
        >
          <MoodIcon
            sx={{ color: colors.secondary, mb: 1, fontSize: "32px" }}
          />
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, color: colors.text }}
          >
            {humor}
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 0.5 }}>
            Humor médio
          </Typography>
          <Typography variant="body2" sx={{ color: colors.greenSuccess }}>
            +8% referente a ontem
          </Typography>
        </Box>

        {/* Participação */}
        <Box
          sx={{
            flex: 1,
            p: 3,
            borderRadius: "16px",
            backgroundColor: colors.purpleLight,
            textAlign: "center",
          }}
        >
          <GroupIcon
            sx={{ color: colors.primary, mb: 1, fontSize: "32px" }}
          />
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, color: colors.text }}
          >
            {participacao}%
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 0.5 }}>
            Taxa de participação
          </Typography>
          <Typography variant="body2" sx={{ color: colors.greenSuccess }}>
            +8% referente a ontem
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}