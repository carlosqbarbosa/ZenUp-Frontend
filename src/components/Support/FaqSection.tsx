import { Box, Typography } from "@mui/material";
import React from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import colors from "../../styles/colors"; 

interface FaqItemProps {
    question: string;
    answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => (
    <Box 
        sx={{ 
            p: 2, 
            mb: 2, 
            backgroundColor: '#fff', 
            borderRadius: '12px', 
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
            border: '1px solid #eee'
        }}
    >
        <Typography variant="subtitle1" sx={{ fontWeight: 600, color: colors.text }}>
            {question}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            {answer}
        </Typography>
    </Box>
);

const FaqSection = () => {
    const faqs = [
        {
            question: "Como funciona o sistema de check-ins?",
            answer: "Os colaboradores podem fazer check-ins diários para registrar seu humor, nível de energia e estresse. Os dados são consolidados em relatórios para análise.",
        },
        {
            question: "Como adicionar novos colaboradores?",
            answer: "Vá até a seção 'Colaboradores' e clique em 'Adicionar Colaborador'. Preencha as informações necessárias e envie um convite por email.",
        },
        {
            question: "Posso customizar as métricas de bem-estar?",
            answer: "Sim! Nas configurações da empresa, você pode personalizar as perguntas do check-in e as métricas que deseja acompanhar.",
        },
        {
            question: "Como interpretar os relatórios?",
            answer: "Os relatórios mostram tendências ao longo do tempo. Foque em padrões e mudanças bruscas que podem indicar necessidade de intervenção.",
        },
    ];

    return (
        <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, pt: 1 }}>
                <HelpOutlineIcon sx={{ color: colors.primary, mr: 1, fontSize: 28 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, color: colors.primary }}>
                    Perguntas Frequentes
                </Typography>
            </Box>
            
            <Box>
                {faqs.map((faq, index) => (
                    <FaqItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </Box>
        </Box>
    );
};

export default FaqSection;