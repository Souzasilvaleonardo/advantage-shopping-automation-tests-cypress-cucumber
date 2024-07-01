# Advantage Shopping - Testes de Automação com Cypress e Cucumber

## Descrição
Este projeto realiza a automação de testes para a aplicação Advantage Online Shopping, utilizando Cypress e Cucumber. Ele abrange testes tanto de API quanto de interface web, com foco em garantir a funcionalidade e a integridade do sistema.

## Estrutura do Projeto
A estrutura do projeto foi organizada de forma a facilitar a manutenção e a execução dos testes:


## Instalação e Configuração

### Pré-requisitos
- Node.js instalado. Você pode instalá-lo seguindo as instruções no [site oficial do Node.js](https://nodejs.org/).

### Como Baixar e Configurar
1. Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/advantage-shopping-cucumber-automation.git
    ```
2. Acesse a pasta do projeto:
    ```bash
    cd advantage-shopping-cucumber-automation
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```

## Executando os Testes

### Abrir Cypress para Testes Manuais
```bash
npm run cypress:open
```

### Executar Teste web
```bash
npm run cypress:run:web
```

### Executar Testes de API
```bash
npm run cypress:run:api
```

## Testes Implementados

### Testes Web
**1. Busca de Produto:** Pesquisa por produtos na interface web e valida a exibição dos resultados.

**2. Adicionar Produto ao Carrinho:** Adiciona um produto ao carrinho e valida sua presença.

**3. Validação de Produtos no Carrinho:** Verifica se os produtos adicionados aparecem na tela de pagamento.

### Testes API
**1. Criar Novo Usuário (POST):** Cria um novo usuário na aplicação via API.

**2. Login (POST):** Realiza login com um usuário cadastrado.

**3. Busca de Produto (GET):** Pesquisa por produtos e valida os resultados e o status da resposta.

**4. Atualizar Imagem de Produto (PUT):** Atualiza a imagem de um produto via API usando RestAssured.

### Evidência de Testes Bem-Sucedidos

Aqui está uma captura de tela mostrando todos os testes passando com sucesso:



## Justificativa para o Uso de Comandos Personalizados

No contexto de testes com Cypress, optamos por utilizar comandos personalizados ao invés de Page Objects. Essa abordagem oferece as seguintes vantagens:

- **Reusabilidade:** Comandos personalizados encapsulam ações repetitivas, facilitando a reutilização e manutenção do código.

- **Clareza e Simplicidade:** A implementação de comandos personalizados permite uma leitura mais clara e intuitiva dos testes, focando nas ações que os testes realizam ao invés da estrutura da página.

- **Performance:** Comandos personalizados podem reduzir a sobrecarga de código, mantendo a execução dos testes mais eficiente.

No entanto, é importante ressaltar que Page Objects também têm seu valor, especialmente em projetos onde a separação da lógica da interface é crucial para a manutenção e escalabilidade do código.

## Organização das Pastas

A organização das pastas é crucial para a manutenção e escalabilidade do projeto. Mantemos uma estrutura clara que separa:

- **Testes Web e API:** Diferenciando claramente os cenários e passos para web e API.

- **Comandos Personalizados:** Isolando comandos comuns em pastas específicas, facilitando sua localização e reutilização.

- **Fixtures e Suporte:** Mantendo dados e configurações separados, o que facilita a configuração e execução dos testes.

## Boas Práticas de Segurança

É uma boa prática incluir a pasta cypress.env.json no .gitignore para proteger dados sensíveis. Neste projeto, mantivemos o arquivo no repositório apenas para fins demonstrativos, mas é importante que em um ambiente real de desenvolvimento essa prática seja seguida rigorosamente.

## Arquivos no Repositório

- `cypress/:` Contém todos os arquivos de configuração e suporte para os testes.

- `.gitignore:` Arquivos e pastas a serem ignorados pelo Git.

- `cypress.config.js:` Configurações do Cypress.

- `cypress.env.json:` Dados sensíveis de configuração (manter seguro).

- `package-lock.json e package.json:` Arquivos de configuração de dependências do Node.js.

