import { Box, Typography, Card } from "@mui/material";
import colors from "../../styles/colors";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import MoodIcon from "@mui/icons-material/Mood";
import GroupIcon from "@mui/icons-material/Group";

interface DailyMetricsProps {
  checkins: number;
  humor: string;
  participacao: number;
}

export default function DailyMetricsCard({
  checkins,
  humor,
  participacao,
}: DailyMetricsProps) {
  return (
    <Card
      sx={{
        borderRadius: "20px",
        p: 3,
        backgroundColor: colors.white,
        boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
      }}
    >
      <Typography variant="h6" sx={{ color: colors.primary, mb: 1, fontWeight: 700 }}>
        Diário
      </Typography>
      <Typography color="text.secondary" mb={3}>
        Métricas de preenchimento dos dias
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-around", gap: 3 }}>
        {/* Check-ins */}
        <Box textAlign="center">
          <InsertChartIcon sx={{ color: colors.primary, mb: 1 }} />
          <Typography variant="h4" sx={{ fontWeight: 700, color: colors.primary }}>
            {checkins}
          </Typography>
          <Typography color="text.secondary">Check-ins do dia</Typography>
          <Typography variant="body2" sx={{ color: colors.greenSuccess }}>
            +8% referente a ontem
          </Typography>
        </Box>

        {/* Humor */}
        <Box textAlign="center">
          <MoodIcon sx={{ color: colors.secondary, mb: 1 }} />
          <Typography variant="h4" sx={{ fontWeight: 700, color: colors.secondary }}>
            {humor}
          </Typography>
          <Typography color="text.secondary">Humor médio</Typography>
          <Typography variant="body2" sx={{ color: colors.greenSuccess }}>
            +8% referente a ontem
          </Typography>
        </Box>

        {/* Participação */}
        <Box textAlign="center">
          <GroupIcon sx={{ color: colors.primary, mb: 1 }} />
          <Typography variant="h4" sx={{ fontWeight: 700, color: colors.primary }}>
            {participacao}%
          </Typography>
          <Typography color="text.secondary">Taxa de participação</Typography>
          <Typography variant="body2" sx={{ color: colors.greenSuccess }}>
            +8% referente a ontem
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
