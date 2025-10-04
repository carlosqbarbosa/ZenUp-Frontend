import Layout from "../../components/Layout/Layout";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default function Dashboard() {
  return (
    <Layout title="Dashboard">
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 3 }}>
        {[1, 2, 3].map((i) => (
          <Card key={i} sx={{ borderRadius: "16px", boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h6">Card {i}</Typography>
              <Typography color="text.secondary">Exemplo de métrica</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Layout>
  );
}
