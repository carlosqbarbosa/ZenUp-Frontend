import { createContext, useContext, useEffect, useState } from "react";
import { login as loginService, logout, getStoredUser } from "../services/authService";

interface User {
  id_usuario: number;
  nome_funcionario: string;
  email: string;
  tipo_usuario: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean; 
  login: (email: string, senha: string) => Promise<void>;
  logout: () => void;
  updateUser: (updatedUser: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = getStoredUser();

    if (storedUser) {
      setUser(storedUser);
    }

    setLoading(false); 
  }, []);

  async function login(email: string, senha: string) {
    const { user } = await loginService(email, senha);
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
    logout();
  }

  function updateUser(updatedData: Partial<User>) {
    if (!user) return;
    
    const updatedUser = { ...user, ...updatedData };
    setUser(updatedUser);
    
    localStorage.setItem("user", JSON.stringify(updatedUser));
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      login, 
      logout: handleLogout,
      updateUser 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

