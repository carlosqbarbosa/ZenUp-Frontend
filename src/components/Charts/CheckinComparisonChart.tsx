import { Box, Typography, Card } from "@mui/material";
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
import colors from "../../styles/colors";

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
    <Card
      sx={{
        borderRadius: "20px",
        p: 3,
        backgroundColor: colors.white,
        boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
      }}
    >
      <Box sx={{ width: "100%", height: 400 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: colors.primary,
            mb: 1,
          }}
        >
          Comparação de Check-ins Mensais
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            mb: 3,
          }}
        >
          Comparativo de colaboradores que fizeram e não fizeram check-in ao longo do ano
        </Typography>

        <ResponsiveContainer width="100%" height="85%">
          <BarChart
            data={data}
            barGap={6}
            margin={{ top: 10, right: 20, left: -15, bottom: 5 }}
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
            <Tooltip
              contentStyle={{
                backgroundColor: colors.white,
                borderRadius: "12px",
                border: "1px solid #eee",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
              }}
              formatter={(value: number, name: string) => [
                `${value} colaboradores`,
                name === "fezCheckin"
                  ? "Fez check-in"
                  : "Não fez check-in",
              ]}
            />
            <Legend
              iconType="circle"
              wrapperStyle={{
                paddingTop: 10,
                fontSize: 12,
              }}
            />

            {/* Fez Check-in */}
            <Bar
              dataKey="fezCheckin"
              name="Fez check-in"
              fill={colors.primary}
              radius={[6, 6, 0, 0]}
            />

            {/* Não fez Check-in */}
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
  );
}
