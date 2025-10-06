import { Box, Typography } from "@mui/material";
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

export default function CheckinComparisonChart() {
  const data = [
    { mes: "Jan", fezCheckin: 220, naoFezCheckin: 180 },
    { mes: "Fev", fezCheckin: 200, naoFezCheckin: 150 },
    { mes: "Mar", fezCheckin: 250, naoFezCheckin: 210 },
    { mes: "Abr", fezCheckin: 180, naoFezCheckin: 160 },
    { mes: "Mai", fezCheckin: 240, naoFezCheckin: 200 },
    { mes: "Jun", fezCheckin: 210, naoFezCheckin: 170 },
    { mes: "Jul", fezCheckin: 230, naoFezCheckin: 190 },
    { mes: "Ago", fezCheckin: 260, naoFezCheckin: 220 },
    { mes: "Set", fezCheckin: 270, naoFezCheckin: 210 },
    { mes: "Out", fezCheckin: 300, naoFezCheckin: 250 },
    { mes: "Nov", fezCheckin: 280, naoFezCheckin: 230 },
    { mes: "Dez", fezCheckin: 310, naoFezCheckin: 260 },
  ];

  return (
    <Box sx={{ width: "100%", height: 400 }}>
      <Typography variant="h6" mb={1} sx={{ fontWeight: 600, color: "#1A237E" }}>
        Comparação de Registro Mensal
      </Typography>
      <Typography variant="body2" mb={3} sx={{ color: "text.secondary" }}>
        Comparativo de colaboradores que fizeram e não fizeram check-in ao longo do ano
      </Typography>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" tick={{ fontSize: 12 }} />
          <YAxis />
          <Tooltip
            formatter={(value: number) => [`${value} colaboradores`, ""]}
          />
          <Legend />
          <Bar
            dataKey="fezCheckin"
            fill="#3F51B5"
            name="Fez check-in"
            radius={[6, 6, 0, 0]}
          />
          <Bar
            dataKey="naoFezCheckin"
            fill="#FF7043"
            name="Não fez check-in"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}
