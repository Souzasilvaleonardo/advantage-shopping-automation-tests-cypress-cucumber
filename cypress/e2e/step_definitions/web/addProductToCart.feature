Feature: Adicionar Produto ao Carrinho

Scenario: Usuário adiciona um produto ao carrinho
    Given que estou na página de resultados da busca por "Laptops"
    When eu seleciono um "Laptop" da lista
    Then o "Laptop" adicionado deve estar no meu carrinho