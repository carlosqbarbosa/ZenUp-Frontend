import Layout from "../../components/Layout/Layout";
import { Box, TextField, Avatar, Button, Typography, Grid } from "@mui/material";
import { useState } from "react";
import colors from "../../styles/colors"; // Importamos o objeto de cores
import React from "react"; // Mantemos o import do React

// Dados mockados para simular o perfil completo
const initialProfileData = {
  nome: "Felipe Gusmão Pereira",
  email: "felipe.gusmao@zenup.com.br",
  telefone: "+55 11 99999-9999",
  dominio: "@zenup.com",
  estado: "Pernambuco",
  cidade: "Recife",
  statusConta: "Ativa",
  ultimoAcesso: "19/09/25"
};

export default function Perfil() {
  const [profileData, setProfileData] = useState(initialProfileData);
  const [isSaved, setIsSaved] = useState(false);

  // Função para atualizar o estado quando o usuário digita
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
    setIsSaved(false);
  };

  // Função para simular o salvamento (submissão do formulário)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do perfil salvos:", profileData);
    setIsSaved(true);
    // Aqui seria feita a chamada à API (POST/PUT)
  };

  return (
    <Layout title="Meu Perfil">
      <Box sx={{ p: 0, width: "100%", maxWidth: 1200 }}>
        {/* TÍTULO E SUBTÍTULO DA PÁGINA */}
              <Typography variant="h4" sx={{ fontWeight: 700, color: colors.primary }}>
                Meu Perfil
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                Gerencie suas informações pessoais e configurações de conta.
              </Typography>
              

        {/* CONTEÚDO PRINCIPAL EM DUAS COLUNAS */}
        <Grid 
          container 
          spacing={4} 
          sx={{ display: 'flex' }}
        >
          
          {/* COLUNA ESQUERDA: FORMULÁRIO DE INFORMAÇÕES PESSOAIS (md=8) */}
          <Grid>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ 
                p: 4,
                backgroundColor: "#fff",
                borderRadius: "16px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                height: '100%',
              }}
            >
              
              {/* TÍTULO DO GRUPO DE CAMPOS */}
              <Typography variant="h6" sx={{ fontWeight: 600, color: colors.primary }}>
                Informações Pessoais
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 1 }}>
                Suas informações básicas e de contato.
              </Typography>

              {/* Sub-Grid para os campos de formulário */}
              <Grid container spacing={3}>
                {/* LINHA 1: NOME E TELEFONE */}
                <Grid>
                  <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: 'block', color: colors.primary }}>Nome completo</Typography>
                  <TextField
                    fullWidth
                    name="nome"
                    value={profileData.nome}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid>
                  <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: 'block', color: colors.primary  }}>Telefone</Typography>
                  <TextField
                    fullWidth
                    name="telefone"
                    value={profileData.telefone}
                    onChange={handleChange}
                  />
                </Grid>

                {/* LINHA 2: EMAIL E DOMÍNIO */}
                <Grid>
                  <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: 'block', color: colors.primary  }}>Email</Typography>
                  <TextField
                    fullWidth
                    name="email"
                    type="email"
                    value={profileData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid>
                  <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: 'block', color: colors.primary  }}>Domínio</Typography>
                  <TextField
                    fullWidth
                    name="dominio"
                    value={profileData.dominio}
                    onChange={handleChange}
                    disabled
                  />
                </Grid>

                {/* LINHA 3: ESTADO E CIDADE */}
                <Grid>
                  <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: 'block', color: colors.primary  }}>Estado</Typography>
                  <TextField
                    fullWidth
                    name="estado"
                    value={profileData.estado}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid>
                  <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: 'block', color: colors.primary  }}>Cidade</Typography>
                  <TextField
                    fullWidth
                    name="cidade"
                    value={profileData.cidade}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              
              {/* FEEDBACK E BOTÃO DE SALVAR */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mt: 'auto', pt: 2, gap: 2 }}>
                {isSaved && (
                  <Typography color="primary" sx={{ fontWeight: 600 }}>
                    Alterações salvas com sucesso!
                  </Typography>
                )}
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    height: 48,
                    borderRadius: "12px",
                    textTransform: "uppercase",
                  }}
                >
                  Salvar alterações
                </Button>
                
              </Box>
            </Box>
          </Grid>
          
          {/* COLUNA DIREITA: PAINEL DE INFORMAÇÕES DO USUÁRIO (md=4) */}
          <Grid>
            <Box
              sx={{
                p: 4,
                backgroundColor: "#fff",
                borderRadius: "16px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 2,
                height: '100%',
              }}
            >
              <Avatar
                sx={{
                  width: 120,
                  height: 120,
                  borderRadius: '12px',
                  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)'
                }}
                src="https://i.pravatar.cc/150?u=FelipeGusmao"
              />
              <Typography variant="h6" sx={{ fontWeight: 700, mt: 1, color: colors.primary  }}>
                {profileData.nome.split(' ')[0]} {profileData.nome.split(' ')[1]}
              </Typography>

              {/* DETALHES DA CONTA */}
              <Box sx={{ mt: 2, width: '100%', borderTop: '1px solid #eee', pt: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Status da conta: 
                  <Box component="span" sx={{ ml: 1, color: '#00c853', fontWeight: 600 }}>
                    {profileData.statusConta}
                  </Box>
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Último acesso: {profileData.ultimoAcesso}
                </Typography>
              </Box>
              
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
