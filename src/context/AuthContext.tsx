import { createContext, useContext, useEffect, useState } from "react";
import { login as loginService, logout, getStoredUser } from "../services/authService";

interface User {
  id_usuario: number;
  nome: string;
  email: string;
  tipo_usuario: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, senha: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = getStoredUser();
    if (storedUser) setUser(storedUser);
  }, []);

  async function login(email: string, senha: string) {
    const { user } = await loginService(email, senha);
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
    logout();
  }

  return (
    <AuthContext.Provider value={{ user, login, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
