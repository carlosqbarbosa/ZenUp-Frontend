// src/types/profile.ts

// Usamos 'type' para ser compatível com 'export type' em ambientes modernos.
export type ProfileData = {
    nomeCompleto: string;
    email: string;
    telefone: string;
    dominio: string;
    estado: string;
    cidade: string;
}

// Opcional, mas útil: Tipagem para as props do formulário
export interface ProfileFormProps {
    profileData: ProfileData;
    isEditing: boolean;
    onSave: (e: React.FormEvent) => void;
    onCancel: () => void;
    onEditStart: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}