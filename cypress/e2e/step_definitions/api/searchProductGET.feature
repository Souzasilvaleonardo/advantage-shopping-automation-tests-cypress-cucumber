Feature: Testes de API - GET no Advantage Online Shopping

Scenario: Buscar Produto por Nome e Validar Resultados
Given que eu busco por um produto com o nome "tablets"
Then uma lista de "tablets" deve aparecer e o status da resposta deve ser 200