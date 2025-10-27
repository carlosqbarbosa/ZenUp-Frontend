import { Box, Typography, Card } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import colors from "../../styles/colors";

interface Suggestion {
  text: string;
  type: "success" | "warning" | "error";
}

interface Props {
  suggestions: Suggestion[];
}

export default function SuggestionsCard({ suggestions }: Props) {
  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircleIcon sx={{ color: colors.greenSuccess }} />;
      case "warning":
        return <WarningAmberIcon sx={{ color: colors.secondary }} />;
      default:
        return <ErrorOutlineIcon sx={{ color: colors.error }} />;
    }
  };

  const getBg = (type: string) => {
    switch (type) {
      case "success":
        return "#E8F5E9";
      case "warning":
        return "#FFF3E0";
      default:
        return "#FFEBEE";
    }
  };

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
        Sugestões de ações
      </Typography>
      <Typography color="text.secondary" mb={2}>
        Medidas a serem tomadas para melhorar o clima
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {suggestions.map((s, idx) => (
          <Card
            key={idx}
            sx={{
              p: 2,
              display: "flex",
              alignItems: "center",
              gap: 2,
              borderRadius: "12px",
              backgroundColor: getBg(s.type),
              boxShadow: "none",
            }}
          >
            {getIcon(s.type)}
            <Typography variant="body2" color="text.primary">
              {s.text}
            </Typography>
          </Card>
        ))}
      </Box>
    </Card>
  );
}
