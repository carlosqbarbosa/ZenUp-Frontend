import {
  Box,
  Typography,
  Card,
  Stack,
  Button,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import DownloadIcon from "@mui/icons-material/Download"; 
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import colors from "../../styles/colors";
import { checkinComparisonMock } from "../../data/checkinsComparison";

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (!active || !payload || payload.length === 0) return null;

  const fez = payload.find((item) => item.dataKey === "fezCheckin");
  const naoFez = payload.find((item) => item.dataKey === "naoFezCheckin");

  return (
    <Box
      sx={{
        backgroundColor: colors.white,
        borderRadius: "12px",
        border: "1px solid #eee",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
        p: 1.5,
      }}
    >
      <Typography sx={{ fontWeight: 600, mb: 0.5 }}>{label}</Typography>

      {fez && (
        <Typography sx={{ color: colors.primary, fontSize: 13 }}>
          Fez check-in: <strong>{fez.value}</strong> colaboradores
        </Typography>
      )}
      {naoFez && (
        <Typography sx={{ color: colors.secondary, fontSize: 13 }}>
          Não fez check-in: <strong>{naoFez.value}</strong> colaboradores
        </Typography>
      )}
    </Box>
  );
};

export default function CheckinComparisonChart() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Card
        sx={{
          borderRadius: "20px",
          p: 4,
          backgroundColor: colors.white,
          boxShadow: "0px 6px 20px rgba(0,0,0,0.05)",
        }}
      >
        {/* Cabeçalho */}
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, color: colors.primary, mb: 0.5 }}
        >
          Comparação de Check-ins Mensais
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: colors.textGray, mb: 3 }}
        >
          Comparativo de colaboradores que fizeram e não fizeram check-in ao
          longo do ano
        </Typography>
        {/* Botões*/} 
        <Stack direction="row" spacing={2} mb={4}> 
          <Button 
            variant="outlined" 
            startIcon={<DownloadIcon />} 
            sx={{ 
            textTransform: "none", 
            borderRadius: "12px", 
            borderColor: colors.secondary, 
            color: colors.secondary, 
            fontWeight: 500, px: 2.5, 
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
            borderColor: colors.primary, color: colors.primary, 
            fontWeight: 500, 
            px: 2.5, 
            "&:hover": 
            { backgroundColor: "rgba(92,70,249,0.08)", 
            borderColor: colors.primary, 
            }, 
            }} 
              > 
              Mensal 
          </Button> 
        </Stack>

        {/* Gráfico */}
        <Box sx={{ width: "100%", height: 370 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={checkinComparisonMock}
              barGap={6}
              margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#E0E0E0"
              />
              <XAxis
                dataKey="mes"
                tick={{ fontSize: 12, fill: colors.textGray }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12, fill: colors.textGray }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                iconType="circle"
                wrapperStyle={{ paddingTop: 10, fontSize: 12 }}
              />

              <Bar
                dataKey="fezCheckin"
                name="Fez check-in"
                fill={colors.primary}
                radius={[6, 6, 0, 0]}
              />
              <Bar
                dataKey="naoFezCheckin"
                name="Não fez check-in"
                fill={colors.secondary}
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Card>
    </Box>
  );
}
