# Teste para Engenheiro de QA (Quality Assurance) - Pleno

Este repositório contém os resultados do teste realizado para o cargo de Engenheiro de QA Pleno. O objetivo do teste é avaliar a capacidade de automatizar testes, validar APIs, garantir a qualidade do software e realizar testes de performance.

## 📌 Descrição do Desafio

O teste foi realizado de acordo com os seguintes requisitos:

1️⃣ **Testes automatizados de interface (UI)** para um formulário de cadastro.
2️⃣ **Testes automatizados de API** utilizando uma API mock.
3️⃣ **Testes de performance** simulando múltiplos acessos simultâneos.

## 📌 1. Testes de UI (Interface) - Cypress

Os testes de interface foram realizados utilizando **Cypress**, validando o formulário de cadastro de usuário. Os seguintes requisitos foram validados:

- **Campos obrigatórios**: O formulário não permite envio sem preencher todos os campos.
- **Senha forte**: A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número.
- **Confirmação de e-mail**: O e-mail digitado no campo "Confirmação de E-mail" deve ser igual ao e-mail principal.

### Cenários de Teste Realizados

#### **Cadastro** (`cadastro.cy.js`)
- **Preencher o formulário com dados válidos**: Preenche o formulário com dados dinâmicos do fixture e valida se a mensagem de sucesso é exibida.
  - Dados utilizados: Nome, e-mail e número de telefone são retirados de um fixture (`usuarios`).
  - Ação: O formulário é enviado e a mensagem de sucesso "Thanks for submitting the form" é verificada.

#### **Login** (`login.cy.js`)
- **Login com credenciais válidas**: Realiza o login com um nome de usuário e senha válidos e verifica se a URL inclui `/profile`.
  - Dados utilizados: `testuser` e `Test@1234`.
  - Ação: O login é feito e a página de perfil é carregada.

- **Login com credenciais inválidas**: Tenta fazer o login com credenciais inválidas e valida se a mensagem de erro é exibida.
  - Dados utilizados: `usuario_invalido` e `senha_invalida`.
  - Ação: A mensagem "Invalid username or password" é verificada na tela.

Os arquivos de teste do Cypress estão localizados em `cypress/e2e/cadastro.cy.js` e `cypress/e2e/login.cy.js`.

## 📌 2. Testes de API - Postman

Os testes de API foram realizados utilizando o **Postman**, com as seguintes requisições:

- **GET**: Validando a resposta da API com status 200.
- **POST 200**: Validando o envio de dados válidos para a API e verificando o retorno com status 200.
- **POST 400**: Enviando uma requisição com dados faltantes e validando o erro retornado com status 400.
- **POST 500**: Simulando erro no servidor e validando o retorno com status 500.

Os testes estão documentados na coleção do Postman, que pode ser encontrada em `postman/collection.json`.

## 📌 3. Testes de Performance - k6

Os testes de performance foram realizados utilizando **k6**. O objetivo foi simular 100 usuários simultâneos acessando a API mock.

A API mock utilizada foi a `https://reqres.in/api/users/2`, e os testes realizados verificaram:

- **Tempo de resposta**: A API consegue responder rapidamente sob carga?
- **Erros de requisição**: Existem falhas quando muitos usuários acessam ao mesmo tempo?
- **Uso de CPU/memória**: O sistema se mantém estável?

### Cenário de Teste Realizado

- **Teste de carga**: O teste simulou 100 usuários simultâneos acessando a API mock `https://reqres.in/api/users/2`.
  - O teste foi configurado para durar 30 segundos.
  - O tempo de resposta foi medido para garantir que 95% das requisições fossem respondidas em menos de 500ms.
  - As falhas de requisição foram verificadas para garantir que a taxa de falhas fosse inferior a 5%.

O código do teste de performance está localizado em `k6/load-test.js`.

## 📌 Resultados dos Testes

### Testes de UI (Cypress)
Os testes de UI foram executados com sucesso, e todos os cenários foram validados conforme esperado. Não foram encontrados erros durante a execução dos testes.

### Testes de API (Postman)
Os testes de API retornaram os seguintes resultados:
- Requisição GET para `https://httpbin.org/status` respondeu com sucesso (status 200).
- Requisição POST com dados válidos retornou sucesso (status 200).
- Requisição POST sem campo obrigatório retornou erro 400.
- Simulação de erro no servidor retornou erro 500, conforme esperado.

### Testes de Performance (k6)
O teste de performance foi executado com 100 usuários simultâneos acessando a API mock `https://reqres.in/api/users/2`. Os resultados indicaram que:
- O tempo médio de resposta foi dentro do esperado, com respostas rápidas.
- Não houve falhas de requisição (erros 500).
- O sistema se manteve estável com uso de CPU e memória dentro dos limites normais.

## 📌 Ferramentas Utilizadas

- **Cypress**: Utilizado para os testes de UI.
- **Postman**: Utilizado para os testes de API.
- **k6**: Utilizado para os testes de performance.

## 📌 Como Executar os Testes

### 1. Testes de UI (Cypress)
1. Instale o Cypress com o comando `npm install cypress`.
2. Execute os testes com `npx cypress open`.

### 2. Testes de API (Postman)
1. Importe a coleção Postman em sua aplicação Postman.
2. Execute os testes diretamente na interface do Postman.

### 3. Testes de Performance (k6)
1. Instale o k6 com o comando `npm install -g k6`.
2. Execute os testes com `k6 run k6/load-test.js`.

## 📂 Estrutura do Projeto
```
QA-Guia/
│
│-- cypress/             # Testes End-to-End
│   ├── integration/      # Especificação dos testes
│   ├── fixtures/        # Dados mockados
│   ├── support/         # Configurações globais
│-- k6/                  # Testes de carga
│   ├── load-test.js      # Script de testes K6
│
│-- package.json         # Dependências do projeto
│-- README.md            # Documentação
```

## CI/CD com GitHub Actions
A configuração do CI/CD foi realizada utilizando GitHub Actions para automatizar a execução dos testes sempre que houver um push ou pull request na branch main. O workflow cobre os testes de API, UI e performance, garantindo a qualidade contínua do sistema durante o desenvolvimento.

## 📌 Conclusão

Todos os testes foram realizados com sucesso, cumprindo os requisitos solicitados para validar a qualidade e performance do sistema. Os resultados indicam que tanto a API quanto o formulário de cadastro funcionam corretamente sob diferentes cenários.

Este teste foi projetado para garantir que os aspectos essenciais de qualidade, segurança e performance sejam atendidos no desenvolvimento de software.

---

**Autor**: Juliane Andrade (Engenheira de QA)




---

## 📢 Contribuição
Sinta-se à vontade para abrir issues e enviar pull requests.

