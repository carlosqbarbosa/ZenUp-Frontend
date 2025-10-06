import type { ReactNode } from "react";
import { Box } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#f9f9fb" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Box sx={{ padding: 4, overflowY: "auto" }}>{children}</Box>
      </Box>
    </Box>
  );
}
