# 🐾 **Meus Pets - React App** 🐾

Bem-vindo(a) ao projeto **Meus Pets**! Este é um aplicativo React simples que exibe informações sobre pets e inclui funcionalidades interativas como um formulário para que o usuário digite seu nome e sobrenome. 🌟

---

## 📁 **Estrutura de Pastas**

Aqui está a estrutura de diretórios do projeto:

  ```bash
 src/
│
├── App.js
├── App.css
├── components/
│   ├── Assets/
│   ├── Button/
│   ├── Footer/
│   ├── FormInput/
│   ├── Formulario/
│   ├── Header/
│   ├── Hello/
│   ├── Msg/
│   ├── Pet/
│   └── Pets/
└── index.js

  ```

### 📂 **Descrição das Pastas**

- **Assets/**: 🖼️ Contém as imagens e recursos estáticos usados no projeto.
- **Button/**: 🖲️ Contém o componente de botão reutilizável do projeto.
- **Footer/**: 🚪 Contém o rodapé (footer) do site.
- **FormInput/**: ✍️ Contém os inputs individuais para o formulário.
- **Formulario/**: 📝 Contém o formulário para o usuário deixar sua opinião.
- **Header/**: 📢 Contém o cabeçalho do site, exibindo o nome e o sobrenome do usuário.
- **Hello/**: 👋 Um componente simples que exibe uma saudação personalizada para o usuário.
- **Msg/**: 💬 Um componente de mensagem que exibe textos destacados.
- **Pet/**: 🐕 Componente individual que exibe as informações de um pet.
- **Pets/**: 🐾 Lista de pets, cada um representado pelo componente **Pet**.

---

## 🚀 **Como Rodar o Projeto**

Para executar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:

 ```bash
   git clone https://github.com/DanySanches/MeusPets
 ```
2.Navegue até o diretório do projeto:
  
  ```bash
    cd meus-pets
  ```
3.Instale as dependências:

   ```bash
    npm install
   ```
4.Execute o projeto

   ```bash
    npm start
  ```

## ⚙️ **Funcionalidades Principais**

- 🐱 **Exibição de Pets**: O componente **Pets** exibe uma lista de pets que são representados individualmente pelo componente **Pet**.
- 💬 **Mensagem Customizada**: O componente **Msg** pode ser usado para exibir mensagens coloridas.
- 👨‍💻 **Nome e Sobrenome Interativos**: O usuário pode inserir seu nome e sobrenome, e o cabeçalho será atualizado automaticamente com essas informações após o envio.
- 🐕 Cadastro de Pets: Um formulário dentro do componente Pets permite o cadastro de novos pets com informações como nome, foto e história.
- 🌐 Integração com API Local: O projeto faz requisições HTTP para uma API local para buscar e cadastrar novos pets.

---

## 🛠️ **Tecnologias Utilizadas**

- **React** ⚛️ - Biblioteca JavaScript para construir interfaces de usuário.
- **CSS** 🎨 - Usado para estilização dos componentes.
- **Fetch API** 🌐 - Utilizado para fazer requisições HTTP (GET e POST) à API local.

## 🔄 **Atualizações Recentes**

### 1. **Cadastro de Pets**
Agora o usuário pode cadastrar novos pets através de um formulário. Os dados são enviados para uma API local, e o novo pet é automaticamente exibido na lista após o cadastro.

### 2. **Renderização Condicional do Header**
O componente **Header** agora exibe o nome e o sobrenome do usuário apenas após o envio dos dados através de um formulário interativo.

### 3. **Formulário de Cadastro de Pets**
Adicionada a funcionalidade de formulário no componente **Pets**, permitindo que os usuários adicionem novos pets com nome, foto e história.

### 4. **Busca Automática de Pets**
O componente **Pets** faz uma requisição à API local ao ser montado, buscando e exibindo automaticamente os pets cadastrados.

---

## 🔧 **Instruções para API Local**

A API local deve estar rodando em `http://localhost:3005/` e as rotas esperadas são:

- **GET** `/pets`: Retorna a lista de pets.
- **POST** `/pets`: Adiciona um novo pet à lista.

Certifique-se de que a API esteja funcionando corretamente antes de executar o projeto para o cadastro e exibição dos pets.


  

