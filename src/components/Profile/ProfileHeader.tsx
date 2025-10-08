import { Box, Typography } from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import colors from "../../styles/colors"; 

const ProfileHeader = () => (
    <Box 
        sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            width: '100%', 
            maxWidth: 1200, 
            pb: 3,
            pt: 1, 
        }}
    >
        <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, color: colors.text }}>
                Meu Perfil
            </Typography>
            <Typography color="text.secondary">
                Gerencie suas informações pessoais e configurações de conta.
            </Typography>
        </Box>
        <PersonOutlineIcon sx={{ color: colors.primary, fontSize: 36 }} />
    </Box>
);

export default ProfileHeader;