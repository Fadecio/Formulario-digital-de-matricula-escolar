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
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Acesse a pasta do projeto:

```bash
cd seu-repositorio
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

## ✅ Testes manuais recomendados

Use esta seção como checklist antes de publicar o projeto no GitHub ou apresentar no portfólio.

### 1. Carregamento inicial

- [ ] Abrir o projeto no navegador.
- [ ] Verificar se o título `TERMO DE MATRÍCULA` aparece corretamente.
- [ ] Confirmar se todos os cards do formulário são exibidos.
- [ ] Verificar se não existem erros no console do navegador.

### 2. Validação de campos obrigatórios

- [ ] Clicar em finalizar matrícula sem preencher nenhum campo.
- [ ] Confirmar se os campos obrigatórios ficam destacados como inválidos.
- [ ] Confirmar se aparece o toast `Preencha todos os campos obrigatórios.`
- [ ] Confirmar se a página rola até o primeiro campo inválido.
- [ ] Preencher os campos obrigatórios e verificar se o estado visual muda para válido.

### 3. Validação da data de nascimento

- [ ] Informar uma data futura.
- [ ] Confirmar se a idade fica vazia.
- [ ] Confirmar se aparece o toast `A data de nascimento não pode ser uma data futura.`
- [ ] Informar uma data de criança fora da faixa etária mínima.
- [ ] Confirmar se aparece o toast informando que a criança está fora da faixa etária.
- [ ] Informar uma data válida.
- [ ] Confirmar se a idade é calculada automaticamente.
- [ ] Confirmar se o campo deixa de exibir erro quando a data é válida.

### 4. Máscaras de campos

- [ ] Digitar CPF com apenas números.
- [ ] Confirmar se o campo formata como `000.000.000-00`.
- [ ] Digitar CEP com apenas números.
- [ ] Confirmar se o campo formata como `00000-000`.
- [ ] Digitar telefone com 10 números.
- [ ] Confirmar se o campo formata como `(00) 0000-0000`.
- [ ] Digitar telefone com 11 números.
- [ ] Confirmar se o campo formata como `(00) 00000-0000`.

### 5. Validação de CPF, CEP, telefone e e-mail

- [ ] Digitar CPF com menos de 11 números e confirmar erro.
- [ ] Digitar CPF com 11 números e confirmar validação.
- [ ] Digitar CEP com menos de 8 números e confirmar erro.
- [ ] Digitar CEP com 8 números e confirmar validação.
- [ ] Digitar telefone incompleto e confirmar erro.
- [ ] Digitar telefone válido e confirmar validação.
- [ ] Digitar e-mail inválido e confirmar erro.
- [ ] Digitar e-mail válido e confirmar validação.

### 6. Campo condicional de transporte escolar

- [ ] Confirmar se o campo `Tipo de transporte` inicia desabilitado.
- [ ] Marcar `Sim` em transporte escolar.
- [ ] Confirmar se o campo `Tipo de transporte` fica habilitado.
- [ ] Tentar finalizar sem preencher o tipo de transporte.
- [ ] Confirmar se o campo é tratado como obrigatório.
- [ ] Marcar `Não` em transporte escolar.
- [ ] Confirmar se o campo é limpo, desabilitado e deixa de ser obrigatório.

### 7. Termo de responsabilidade

- [ ] Tentar finalizar sem marcar o termo.
- [ ] Confirmar se aparece mensagem de erro.
- [ ] Marcar o termo de responsabilidade.
- [ ] Confirmar se o erro desaparece após nova validação.

### 8. Finalização da matrícula

- [ ] Preencher todos os campos obrigatórios corretamente.
- [ ] Clicar no botão de finalizar matrícula.
- [ ] Confirmar se aparece o toast `Matrícula realizada com sucesso!`
- [ ] Confirmar se nenhum campo válido é marcado como inválido.

### 9. Nova matrícula

- [ ] Preencher alguns campos do formulário.
- [ ] Clicar no botão de nova matrícula.
- [ ] Confirmar se os campos são limpos.
- [ ] Confirmar se os estados visuais de erro e sucesso são removidos.
- [ ] Confirmar se aparece o toast `Formulário limpo para nova matrícula.`
- [ ] Confirmar se o campo `Tipo de transporte` volta ao estado desabilitado.

### 10. Histórico de matrícula

- [ ] Preencher algumas linhas da tabela de histórico.
- [ ] Deixar alguns campos da tabela vazios.
- [ ] Selecionar uma data de matrícula em uma das linhas.
- [ ] Confirmar se os campos aceitam edição normalmente antes da impressão.

### 11. Impressão

- [ ] Clicar no botão de impressão.
- [ ] Verificar se a visualização abre em modo paisagem.
- [ ] Confirmar se botões, toasts e mensagens de erro não aparecem na impressão.
- [ ] Confirmar se campos vazios da tabela aparecem em branco.
- [ ] Confirmar se o ícone do calendário não aparece nos campos de data da tabela.
- [ ] Confirmar se datas preenchidas aparecem no formato `dd/mm/aaaa`.
- [ ] Cancelar ou concluir a impressão.
- [ ] Confirmar se, ao voltar para a tela, os campos de data continuam funcionando normalmente.

### 12. Responsividade

- [ ] Testar em largura próxima de 320px.
- [ ] Testar em largura próxima de 375px.
- [ ] Testar em largura próxima de 768px.
- [ ] Testar em desktop.
- [ ] Confirmar se o formulário não quebra visualmente.
- [ ] Confirmar se a tabela permite rolagem horizontal quando necessário.
- [ ] Confirmar se os botões continuam acessíveis em telas menores.

### 13. Acessibilidade e experiência de uso

- [ ] Navegar pelos campos usando a tecla `Tab`.
- [ ] Confirmar se os campos recebem foco visual.
- [ ] Confirmar se os toasts podem ser fechados pelo botão `X`.
- [ ] Confirmar se mensagens de erro são claras para o usuário.
- [ ] Confirmar se o formulário continua utilizável apenas com teclado.

## 📌 Status do projeto

Projeto em fase de finalização, com estrutura modular em JavaScript, layout responsivo e checklist de testes manuais preparado para validação antes da publicação.

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
