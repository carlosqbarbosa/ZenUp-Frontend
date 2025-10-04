import { Box, Typography, Avatar } from "@mui/material";

interface HeaderProps {
  title?: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 32px",
        backgroundColor: "#fff",
        borderBottom: "1px solid #eee",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 700, color: "#2a1e8a" }}>
        {title}
      </Typography>

      <Avatar alt="Usuário" src="https://i.pravatar.cc/300" />
    </Box>
  );
}
