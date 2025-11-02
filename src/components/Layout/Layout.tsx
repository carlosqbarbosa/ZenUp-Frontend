import type { ReactNode } from "react";
import { Box } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import colors from "../../styles/colors";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#f9f9fb", color:colors.primary }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Box sx={{ overflowX: "hidden", padding: 4, overflowY: "auto" }}>{children}</Box>
      </Box>
    </Box>
  );
}
