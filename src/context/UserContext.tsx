import React, { createContext, useState, useContext, ReactNode } from "react";

type UserContextType = {
  nomeCompleto: string;
  setNomeCompleto: React.Dispatch<React.SetStateAction<string>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [nomeCompleto, setNomeCompleto] = useState("Felipe Gusmão"); // valor inicial

  return (
    <UserContext.Provider value={{ nomeCompleto, setNomeCompleto }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser deve ser usado dentro de UserProvider");
  return context;
}
