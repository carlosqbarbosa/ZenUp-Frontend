import React, { createContext, useState, useContext, ReactNode } from "react";

type UserContextType = {
  nomeCompleto: string;
  setNomeCompleto: React.Dispatch<React.SetStateAction<string>>;
  fotoPerfil: string;
  setFotoPerfil: React.Dispatch<React.SetStateAction<string>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [fotoPerfil, setFotoPerfil] = useState("");

  return (
    <UserContext.Provider
      value={{ nomeCompleto, setNomeCompleto, fotoPerfil, setFotoPerfil }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser deve ser usado dentro de UserProvider");
  return context;
}

