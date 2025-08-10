# Desafio Angular com Firebase: Gerenciamento de CPF Blocks

Aplicação desenvolvida como parte de um desafio técnico para demonstrar habilidades no desenvolvimento de uma aplicação web com Angular, integrada a serviços do Firebase (Firestore e Emulators) para realizar operações de CRUD (Create, Read, Update, Delete).

## 🚀 Funcionalidades Implementadas

* ✅ **Criação (Create):** Formulário para cadastrar um novo CPF Block, com validações de formato e campos obrigatórios.
* ✅ **Leitura (Read):**
  * Listagem de todos os CPF Blocks cadastrados.
  * Página de detalhamento para visualizar um CPF Block específico.
* ✅ **Atualização (Update):** Formulário para editar as informações de um CPF Block existente.
* ✅ **Exclusão (Delete):** Página de confirmação para remover um CPF Block do banco de dados.
* ✅ **Integração com Emuladores Firebase:** O projeto está configurado para rodar 100% local, utilizando os emuladores do Firebase.

## 🛠️ Tecnologias Utilizadas

* **Angular**
* **TypeScript**
* **Firebase** (Firestore & Emulator Suite)
* **HTML & CSS**

## ✅ Pré-requisitos

Antes de começar, você vai precisar ter as seguintes ferramentas instaladas:
* [Node.js](https://nodejs.org/en/) (que inclui o npm)
* [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)
* [Firebase CLI](https://firebase.google.com/docs/cli) (`npm install -g firebase-tools`)
* [Git](https://git-scm.com/)

## ⚙️ Configuração e Instalação

1.  **Clone o Repositório**
    ```bash
    git clone https://github.com/giufaria/desafio-cpf-blocks.git
    cd desafio-cpf-blocks
    ```

2.  **Configure a Conexão com o Firebase**
    - Acesse o [Console do Firebase](https://console.firebase.google.com/) e crie um novo projeto.
    - Dentro do projeto, ative o serviço **Firestore Database** (em modo de teste).
    - Nas **Configurações do Projeto** (⚙️), adicione um **Aplicativo da Web** (`</>`).
    - Copie o objeto de configuração `firebaseConfig`.
    - No código do projeto, abra o arquivo `src/environments/environment.ts` e cole as chaves, garantindo que a estrutura fique assim:

    ```typescript
    export const environment = {
      production: false,
      firebase: {
        // COLE SUAS CHAVES AQUI
        apiKey: "AIza...",
        authDomain: "seu-projeto.firebaseapp.com",
        projectId: "seu-projeto"
        // ... etc
      }
    };
    ```

3.  **Instale as Dependências**
    Este projeto base possui conflitos de dependências. Para instalar corretamente, utilize a flag `--legacy-peer-deps`:
    ```bash
    npm install --legacy-peer-deps
    ```

4.  **Configure os Emuladores Locais**
    Associe a pasta ao seu projeto Firebase e configure os emuladores:
    ```bash
    firebase use --add
    firebase init emulators
    ```
    *Selecione `Auth` e `Firestore`. Aceite as portas padrão.*

## 🚀 Executando o Projeto

Para rodar a aplicação localmente, você precisará de **dois terminais** abertos na pasta do projeto.

**Terminal 1: Inicie os Emuladores do Firebase**
Este terminal será o nosso "Firebase local". Ele precisa ficar rodando o tempo todo.
```bash
firebase emulators:start
```

**Terminal 2: Inicie a Aplicação Angular**
Este terminal irá compilar e servir a aplicação front-end.
```bash
ng serve
```

A aplicação estará disponível em http://localhost:4200.

A interface dos emuladores estará disponível em http://localhost:4000.
