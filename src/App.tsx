import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import DashboardPage from "./pages/Dashboard/Dashboard";
import Perfil from "./pages/Profile/Profile";
import Faq from "./pages/FAQ/FAQ";
import Logout from "./pages/Logout/Logout";



function LoginWithNavigate() {
  const navigate = useNavigate();

  return (
    <LoginPage
      onRegisterClick={() => navigate("/register")}
    />
  );
}

// Wrapper com navegação para o Register (Já existia, mas aqui está completo)
function RegisterWithNavigate() {
  const navigate = useNavigate();
  // Passa a função de navegação correta para o botão "Cadastre-se"
  return <Register onBackToLogin={() => navigate("/")} />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redireciona /login → / */}
        <Route path="/login" element={<Navigate to="/" />} />

        {/* Login (tela inicial) - AGORA USANDO O WRAPPER CORRETO */}
        <Route path="/" element={<LoginWithNavigate />} />

        {/* Register com navegação */}
        <Route path="/register" element={<RegisterWithNavigate />} />

        {/* Outras páginas */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<Perfil />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/logout" element={<Logout />} />

        {/* Página 404 */}
        <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
