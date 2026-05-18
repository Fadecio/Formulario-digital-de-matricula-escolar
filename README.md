# Formulário Digital de Matrícula Escolar

Projeto front-end desenvolvido para transformar uma folha de matrícula escolar em um formulário digital, responsivo e preparado para impressão. A aplicação permite preencher dados do aluno, documentos, endereço, filiação, informações escolares, termo de responsabilidade e histórico de matrícula.

## 📌 Sobre o projeto

O objetivo deste projeto é facilitar o preenchimento de uma ficha de matrícula escolar por meio de uma interface web simples, organizada e validada. O formulário conta com validações em tempo real, máscaras de campos, cálculo automático de idade, mensagens de feedback, campos condicionais e layout adaptado para impressão.

Este projeto foi desenvolvido com foco em prática de HTML, CSS e JavaScript modular, simulando uma necessidade real de digitalização de documentos escolares.

## 🚀 Funcionalidades

- Formulário completo de matrícula escolar.
- Layout responsivo para desktop, tablet e celular.
- Validação de campos obrigatórios.
- Validação em tempo real durante o preenchimento.
- Máscara automática para CPF, CEP e telefones.
- Cálculo automático da idade a partir da data de nascimento.
- Bloqueio de data de nascimento futura.
- Validação de faixa etária para matrícula.
- Toasts de sucesso e erro.
- Foco automático no primeiro campo inválido.
- Campo condicional para tipo de transporte escolar.
- Botão para limpar e iniciar nova matrícula.
- Área de assinatura do responsável.
- Tabela de histórico de matrícula.
- Impressão em modo paisagem.
- Ajustes específicos para impressão, incluindo remoção de ícones de data e campos vazios da tabela em branco.

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript ES Modules
- DOM Manipulation
- CSS Grid
- Flexbox
- Media Queries
- Print CSS

## 📁 Estrutura do projeto

```txt
.
├── index.html
├── src
│   ├── css
│   │   ├── reset.css
│   │   ├── variable.css
│   │   └── global.css
│   └── scripts
│       ├── age.js
│       ├── conditionalFields.js
│       ├── elements.js
│       ├── feedback.js
│       ├── focus.js
│       ├── formReset.js
│       ├── formValidation.js
│       ├── masks.js
│       ├── print.js
│       ├── script.js
│       ├── toast.js
│       └── validators.js
```

## ▶️ Como executar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/Fadecio/Formulario-digital-de-matricula-escolar
```

2. Acesse a pasta do projeto:

```bash
cd Formulario-digital-de-matricula-escolar
```

3. Abra o arquivo `index.html` no navegador.

Também é possível executar com a extensão **Live Server** no VS Code.

## 📋 Regras de negócio implementadas

### Data de nascimento

- A data de nascimento não pode ser uma data futura.
- A idade é calculada automaticamente ao selecionar a data de nascimento.
- A criança precisa ter pelo menos 2 anos completos ou completar 2 anos durante o ano letivo.
- Crianças acima da faixa etária permitida são sinalizadas como fora da faixa.

### Transporte escolar

- Ao marcar `Sim` em transporte escolar, o campo `Tipo de transporte` é habilitado e passa a ser obrigatório.
- Ao marcar `Não`, o campo é desabilitado, limpo e deixa de ser obrigatório.

### Impressão

- O formulário é preparado para impressão em folha A4 no modo paisagem.
- Botões, mensagens de erro e toasts não aparecem na impressão.
- Campos vazios da tabela de histórico ficam em branco na impressão.
- Campos de data da tabela são convertidos para texto antes da impressão para evitar o ícone do calendário.

## Testes manuais realizados

- Validação de campos obrigatórios vazios.
- Validação de cidade e estado obrigatórios.
- Validação de e-mail inválido.
- Validação de CPF com menos de 11 números.
- Validação de CEP com menos de 8 números.
- Máscara automática de CPF.
- Máscara automática de CEP.
- Máscara automática dos telefones da Filiação 1 e Filiação 2.
- Cálculo automático da idade pela data de nascimento.
- Bloqueio de data de nascimento futura.
- Toast para data de nascimento futura.
- Toast para criança fora da faixa etária.
- Regra de idade mínima: criança precisa ter 2 anos completos ou completar 2 anos no ano letivo.
- Regra de idade máxima: idade maior que 14 fica fora da faixa etária.
- Transporte escolar marcado como “Sim” ativa e torna obrigatório o campo tipo de transporte.
- Transporte escolar marcado como “Não” limpa, desativa e torna inacessível o campo tipo de transporte.
- Botão “Nova matrícula” limpa o formulário e reseta os estados visuais.
- Impressão em modo paisagem.
- Remoção dos botões, toasts e mensagens de erro na impressão.
- Campos vazios da tabela permanecem em branco na impressão.
- Datas da tabela são formatadas corretamente para impressão.

## 📚 Aprendizados aplicados

- Organização de código JavaScript em módulos.
- Manipulação do DOM.
- Validação de formulário com JavaScript puro.
- Uso de máscaras em campos de entrada.
- Feedback visual com classes CSS.
- Criação de componente de toast.
- Regras de negócio aplicadas ao formulário.
- Estilização para tela e impressão.
- Responsividade com CSS Grid, Flexbox e Media Queries.

## 👨‍💻 Autor

Desenvolvido por **Fadecio Lemos**.

[LinkedIn](https://www.linkedin.com/in/fadécio-lemos/)  
[GitHub](https://github.com/Fadecio)
