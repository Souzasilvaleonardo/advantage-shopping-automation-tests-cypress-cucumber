Feature: Busca de Produto

Scenario: Usuário realiza a busca de um Produto
    Given que estou na página inicial do Advantage Online Shopping
    When eu pesquiso por "Laptops"
    Then uma lista de produtos realcionados a "Laptops" deve ser exibida