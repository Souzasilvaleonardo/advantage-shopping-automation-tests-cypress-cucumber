Feature: Validar Produtos no Carrinho

Scenario: Validação do carrinho na tela de pagamento
    Given que um produto foi adicionado ao carrinho
    When eu acesso a tela de pagamento
    Then o produto deve estar listado na tela de pagemento 
    