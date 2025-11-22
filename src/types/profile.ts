export type ProfileData = {
    nomeCompleto: string;
    email: string;
    dominio: string;
}

export interface ProfileFormProps {
    profileData: ProfileData;
    isEditing: boolean;
    onSave: (e: React.FormEvent) => void;
    onCancel: () => void;
    onEditStart: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}