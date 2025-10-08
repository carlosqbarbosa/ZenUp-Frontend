import { Box, Avatar, Typography } from "@mui/material";
import colors from "../../styles/colors";
import React from "react";

interface ProfileAvatarCardProps {
    fullName: string;
}

const ProfileAvatarCard: React.FC<ProfileAvatarCardProps> = ({ fullName }) => {
    const [firstName, lastName] = fullName.split(' ');
    const displayName = `${firstName} ${lastName || ''}`.trim();

    return (
        <Box
            sx={{
                p: 0, 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                mt: 2,
            }}
        >
            <Avatar
                sx={{
                    width: 200, 
                    height: 200,
                    borderRadius: '16px', 
                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
                    objectFit: 'cover',
                }}
                src="https://i.pravatar.cc/300?u=FelipeGusmao" 
            />
            
            <Typography 
                variant="h5" 
                sx={{ 
                    fontWeight: 600, 
                    mt: 1, 
                    color: colors.text 
                }}
            >
                {displayName}
            </Typography>
        </Box>
    );
};

export default ProfileAvatarCard;