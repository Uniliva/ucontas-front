# UcontasFront

[![Build Status](https://travis-ci.com/Uniliva/ucontas-front.svg?branch=master)](https://travis-ci.com/Uniliva/ucontas-front)

Este é uma aplicação simples utilizabdo angular8+, que consome uma api simples de gerenciamento de contas desponivel [aqui](https://github.com/Uniliva/ucontas-api).


Esta aplicação gera uma imagem do docker atraves do Travis CI (https://travis-ci.com/github/Uniliva/ucontas-front), a imagem esta disponivel em: https://hub.docker.com/repository/docker/uniliva/ucontas-front

---

## Executando o projeto local

Para executar o projeto a api mencionada anteriomente deve esta disponivel em _localhost:9090_, ou então altere o endpoint nos environment.

- Passo 1: Baixe o projeto
- Passo 2: Instale as dependências

```typescript
// Acesse a pasta do projeto e execute
npm install
```
- Passo 3: execute

```
ng serve
```

- Passo 4: Acesse em _localhost:4200_

--- 

## Executando no docker 

Você tambem, pode usar essa aplicação atraves do docker, para isso acesse : https://github.com/Uniliva/ucontas-installer e siga as intruções para instalação.

---
