# CYPRESS

Mapa mental do que é o Cypress:
[github](https://github.com/samlucax/cypress-essencial-mindmap)
[Cypress mindmap](https://whimsical.com/cypress-essencial-XpeRr4NebcFJkC2Lpwm4W4)

Documentação:
[doc.cypress.io](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)
[github do projeto](https://github.com/cypress-io/cypress)

## Instalação no Linux Ubuntu

**Pré requisitos:**

* Versão 12.04 ou superior
* Ter o Node.js 10 ou 12 e acima instalado

**>_ yarn add:**

Instalando Cypress via `yarn`:

`$ cd /your/project/path`

`$ yarn add cypress --dev`

Abrindo o Cypress Test Runner:

`$ yarn run cypress open`

#### Ferramentas uteis

* [RegExr](https://regexr.com/) - Consulta de regexs

## O cypress

O cypress utiliza sintaxe bdd de desenvolvimento guiado por comportamento do [mocha](https://mochajs.org/).

Para as asserções o cypress utiliza [chai assertion library](https://www.chaijs.com/api/bdd/) como to.equals...

## Relatórios no cypress

Cypress-multi-reporters: Permite que configuremos mais de um relatório (mochawesome, junit...)

Mochawesome: Biblioteca responsável por gera os arquivos .json usados no report html

Mochawesome-merge: Faz o merge dos arquivos .json gerados pelo mochawesome

Mochawesome-report-generator: Gerar o relatorio gerado em html usando os arquivos gerados (json)

### Instalando as dependencia para gerar o relatório

```
yarn add -D cypress-multi-reporters 
yarn add -D mocha
yarn add -D mochawesome
yarn add -D mochawesome-merge
yarn add -D mochawesome-report-generator

yarn add -D rimraf
```

