export type ProfileData = {
    nomeCompleto: string;
    email: string;
    telefone: string;
    dominio: string;
    estado: string;
    cidade: string;
   // foto: string;
}

export interface ProfileFormProps {
    profileData: ProfileData;
    isEditing: boolean;
    onSave: (e: React.FormEvent) => void;
    onCancel: () => void;
    onEditStart: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}