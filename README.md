# ZenUp - Frontend 

![React 19](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.0-B73C9D?style=for-the-badge&logo=vite&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-Material-007FFF?style=for-the-badge&logo=mui&logoColor=white)

O **ZenUp** é uma aplicação web moderna desenvolvida para oferecer uma experiência fluida e interativa. O projeto utiliza o que há de mais recente no ecossistema React, focando em performance, tipagem estática e uma interface de usuário rica.

---

##  Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Stack Tecnológico](#-stack-tecnológico)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Contribuindo](#-contribuindo)

---

##  Sobre o Projeto

O frontend do ZenUp foi construído para ser rápido e escalável. A aplicação consome uma API externa e oferece aos usuários ferramentas visuais para gestão e análise de dados.

Graças ao uso do **Vite**, o tempo de desenvolvimento e build é extremamente otimizado. A interface é polida utilizando **Material UI (MUI)** juntamente com **Styled Components**, garantindo consistência visual e facilidade de manutenção.

---

## Stack Tecnológico

O projeto utiliza as seguintes bibliotecas e ferramentas principais:

### Core
* **[React 19](https://react.dev/)**: A biblioteca JavaScript mais popular para construção de interfaces.
* **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para maior segurança e inteligência de código.
* **[Vite 7](https://vitejs.dev/)**: Próxima geração de ferramentas de frontend (super rápido).

### Interface & Estilização (UI/UX)
* **[Material UI (MUI)](https://mui.com/)**: Biblioteca de componentes robusta baseada no Material Design.
* **[Styled Components](https://styled-components.com/)**: Para estilização de componentes via CSS-in-JS.
* **[Lucide React](https://lucide.dev/)** & **[MUI Icons](https://mui.com/material-ui/material-icons/)**: Bibliotecas de ícones modernos e vetoriais.
* **[React Slick](https://react-slick.neostack.com/)**: Carrossel interativo para exibição de conteúdo.

### Navegação & Dados
* **[React Router DOM 7](https://reactrouter.com/)**: Gerenciamento de rotas da aplicação.
* **[Axios](https://axios-http.com/)**: Cliente HTTP para comunicação com a API.

### Analytics & Relatórios
* **[Recharts](https://recharts.org/)**: Biblioteca de gráficos compostável para visualização de dados.
* **[jsPDF](https://github.com/parallax/jsPDF)** & **[html2canvas](https://html2canvas.hertzen.com/)**: Ferramentas para gerar e exportar relatórios em PDF diretamente do navegador.

---

##  Funcionalidades Principais

*  **Dashboards Interativos:** Visualização clara de dados utilizando gráficos do Recharts.
*  **Exportação de Relatórios:** Capacidade de gerar arquivos PDF das visualizações e relatórios (via jsPDF e html2canvas).
*  **Design Responsivo:** Interface adaptável a mobile e desktop com componentes MUI.
*  **Roteamento Dinâmico:** Navegação fluida entre páginas sem recarregamento (SPA).

---

##  Pré-requisitos

Certifique-se de ter instalado em sua máquina:

* **Node.js** (Versão 18 ou superior recomendada)
* **npm** (Gerenciador de pacotes padrão)

---

##  Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/carlosqbarbosa/ZenUp-Frontend.git](https://github.com/carlosqbarbosa/ZenUp-Frontend.git)
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd ZenUp-Frontend
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Configuração de Ambiente (.env):**
    Crie um arquivo `.env` na raiz e configure a URL da sua API:
    ```env
    VITE_API_URL=http://localhost:3000
    ```

---

##  Scripts Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor de desenvolvimento local (HMR ativado). |
| `npm run build` | Transpila o código para produção na pasta `dist`. |
| `npm run lint` | Executa o ESLint para verificar a qualidade do código. |
| `npm run preview` | Simula o build de produção localmente. |

---

##  Estrutura do Projeto

A estrutura de pastas segue o padrão sugerido pelo Vite:

```bash
ZenUp-Frontend/
├── public/              # Arquivos estáticos (favicon, logos, etc)
├── src/
│   ├── assets/          # Imagens, fontes e estilos globais
│   ├── components/      # Componentes reutilizáveis da UI
│   ├── contexts/        # Context API (Gerenciamento de estado)
│   ├── hooks/           # Custom Hooks
│   ├── pages/           # Páginas da aplicação (Rotas)
│   ├── services/        # Configuração de API (Axios/Fetch)
│   ├── styles/          # Estilos CSS/Sass/Modules
│   ├── types/           # Definições de tipos TypeScript
│   ├── App.tsx          # Componente principal
│   └── main.tsx         # Ponto de entrada da aplicação
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts