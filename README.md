## Teste Técnico Chat2Desk Brasil

#### Objetivo:

    Desenvolver um sistema de cadastros de usuários e login.

#### Descrição:

    - O sistema deve ser desenvolvido em TypeScript ou JavaScript (de preferência em TypeScript) e Node.js. 
    - A interface é opcional e não será avaliada, não se preocupe com ela. 
    - É recomendado o uso de boas práticas no git para realização do projeto e o uso de docker é considerado um diferencial.
    
#### Serão avaliados:

    - Objetividade, estrutura e organização do código;
    - As estratégias e ferramentas utilizadas;
    - O domínio do TypeScript ou JavaScript e do Node;
    - Validação dos campos;
    - Tratamento de erros (que podem ser simulados para efeito de teste);
    - Estratégias de segurança serão bem vistas;

## **O que foi desenvolvido:**

#### Executar o Projeto:

1. `npm install` `-->` `Instala as dependêcias`
2. `npm run dev` `-->` `executar o projeto com nodemon`

## **Endpoints**

### **Cadastrar usuário**

#### `POST` `/usuario`

Essa é a rota que será utilizada para cadastrar um novo usuario no sistema.

-   **Requisição**  
    Sem parâmetros de rota ou de query.  
    O corpo (body) deverá possuir um objeto com as seguintes propriedades (respeitando estes nomes):
    -   nome
    -   email
    -   senha

#### **Exemplo de requisição**
```javascript
// POST /usuario
{
    "nome": "José",
    "email": "jose@email.com.br",
    "senha": "j1234"
}
```

### **Login do usuário**

#### `POST` `/login`

Essa é a rota que permite o usuario cadastrado realizar o login no sistema.

-   **Requisição**  
    Sem parâmetros de rota ou de query.  
    O corpo (body) deverá possuir um objeto com as seguintes propriedades (respeitando estes nomes):  
    -   email
    -   senha 
   
#### **Exemplo de requisição**
```javascript
// POST /login
{
    "email": "jose@email.com.br",
    "senha": "j1234"
}
```