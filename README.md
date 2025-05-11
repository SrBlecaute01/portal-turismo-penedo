# Portal Turismo Penedo

---

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para criação de interfaces de usuário interativas e baseadas em componentes reutilizáveis.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática, aumentando a segurança e a escalabilidade do código.
- **Vite**: Ferramenta de build moderna e extremamente rápida, com suporte nativo a módulos ES.
- **CSS Modules**: Solução para estilização modular, garantindo escopo local e evitando conflitos de classes.
- **ESLint**: Ferramenta de análise estática para identificar e corrigir problemas no código, promovendo boas práticas.
- **npm**: Gerenciador de pacotes utilizado para instalar, atualizar e gerenciar dependências do projeto.
---

## 🚀 Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) 

### Passos para execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/SrBlecaute01/portal-turismo-penedo.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd portal-turismo-penedo
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Acesse a aplicação no navegador:
   ```
   http://localhost:5173
   ```

---

## 📂 Estrutura do Projeto

Abaixo está a estrutura principal do projeto:

```
src/
├── components/         # Componentes reutilizáveis
│   ├── EventCard/      # Componente de cartão de evento
│   └── ...             # Outros componentes
├── pages/              # Páginas principais da aplicação
│   ├── Events/         # Página de eventos
│   ├── Routes/         # Página de rotas
│   └── ...             # Outras páginas
├── styles/             # Estilos globais e variáveis CSS
├── App.tsx             # Componente principal da aplicação
├── main.tsx            # Ponto de entrada do React
└── vite.config.ts      # Configuração do Vite
```

---

## 🧪 Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera a build de produção.
- `npm run preview`: Visualiza a build de produção localmente.
- `npm run lint`: Executa o linting no código.

---