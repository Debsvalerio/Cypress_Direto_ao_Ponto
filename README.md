# 🚀 Automação de Testes com Cypress | Portfólio QA

Este repositório contém a implementação prática dos aprendizados adquiridos no curso de Cypress da Agilizei, com foco em automação de testes end-to-end (E2E) e testes de API.

O objetivo é demonstrar na prática a criação de uma suíte de testes confiável, organizada e escalável, seguindo boas práticas de mercado.

---

## 🎯 Objetivo

Desenvolver testes automatizados que validem fluxos críticos de uma aplicação, garantindo qualidade, confiabilidade e rapidez nas entregas.

---

## 🧠 Habilidades demonstradas

- Automação de testes E2E com Cypress  
- Escrita de testes em JavaScript moderno (ES6+)  
- Testes de API (validação de requests e responses)  
- Interceptação de chamadas com `cy.intercept`  
- Criação de comandos customizados  
- Uso de fixtures para dados mockados  
- Boas práticas para evitar testes frágeis (flaky tests)  
- Estruturação escalável de projeto de testes  

---

## 🛠️ Stack utilizada

- Cypress  
- JavaScript  
- Node.js  
- NPM  

---

## 📁 Estrutura do Projeto
📦 cypress-automation
┣ 📂 cypress
┃ ┣ 📂 e2e # Testes end-to-end
┃ ┣ 📂 fixtures # Massa de dados mockada
┃ ┣ 📂 support # Commands e configurações globais
┣ 📜 cypress.config.js
┣ 📜 package.json
┗ 📜 README.md


---

## ⚙️ Como executar

### 🔹 Clonar o projeto
git clone https://github.com/seu-usuario/cypress-automation.git


### 🔹 Instalar dependências
npm install


### 🔹 Executar testes

Modo interativo:
npx cypress open


Modo headless:
npx cypress run


---

## 💡 Boas práticas aplicadas

- Uso de seletores resilientes (`data-cy`)  
- Testes independentes e reutilizáveis  
- Separação de responsabilidades  
- Evitar dependência de tempo (`cy.wait` desnecessário)  
- Uso de intercepts para maior estabilidade  
- Organização por contexto de negócio  

---

## 📊 Diferenciais deste projeto

✔ Código limpo e legível  
✔ Estrutura pronta para CI/CD  
✔ Foco em estabilidade dos testes  
✔ Aplicação de práticas reais de QA  
✔ Simulação de cenários reais de usuário  

---

## 👩‍💻 Sobre mim

Profissional de QA com foco em automação de testes, atuando na construção de testes confiáveis e na melhoria contínua da qualidade de software.

---

## 📌 Observação

Este projeto faz parte do meu processo de evolução na automação de testes e será continuamente atualizado com novos cenários e melhorias.
