# Desafio Avanti 2

Uma aplicação **React** que permite buscar e visualizar perfis de usuários do **GitHub** de forma elegante e responsiva.

---

## ⚙️ Instalação e Execução

### Pré-requisitos

- Node.js (v14+)
- npm ou yarn

### Passos para instalação

```bash
# Clone o repositório

# Instale as dependências
npm install
# ou
yarn

# Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev
```

Abra seu navegador e acesse: [http://localhost:5173](http://localhost:5173)

---

## 📋 Sobre o Projeto

Esta aplicação permite que usuários:

- Busquem perfis do GitHub pelo nome de usuário
- Visualizem informações do perfil encontrado (nome, foto e bio)
- Recebam feedback visual quando um perfil não é encontrado

O projeto foi desenvolvido com **React**, **TypeScript**, **Vite** e **Tailwind CSS**, seguindo um design moderno e responsivo.

---

## 🚀 Tecnologias Utilizadas

- **React** – Biblioteca para construção de interfaces
- **TypeScript** – Superset de JavaScript com tipagem estática
- **Vite** – Ferramenta de build para desenvolvimento rápido
- **Tailwind CSS** – Framework CSS utilitário
- **Axios** – Cliente HTTP para requisições à API do GitHub

---

## 🏗️ Estrutura do Projeto

```plaintext
desafio-avanti-2/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchBar.tsx    # Componente de busca
│   │   ├── Profile.tsx      # Componente de exibição do perfil
│   │   └── ErrorMessage.tsx # Componente de mensagem de erro
│   ├── App.tsx              # Componente principal
│   ├── main.tsx             # Ponto de entrada da aplicação
│   └── index.css            # Estilos globais
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

---

## 📱 Funcionalidades

- **Busca de Perfil** – Digite o nome de usuário do GitHub e clique no botão de busca
- **Visualização de Perfil** – Veja a foto, nome e biografia do usuário encontrado
- **Tratamento de Erros** – Exibe mensagem quando o perfil não é encontrado

---

## 🛠️ Scripts Disponíveis

```bash
npm run dev       # Inicia o servidor de desenvolvimento
npm run build     # Cria uma versão otimizada para produção
npm run preview   # Visualiza localmente a versão de produção
```

---

## ✅ Desenvolvido como parte do Desafio Avanti 2.
