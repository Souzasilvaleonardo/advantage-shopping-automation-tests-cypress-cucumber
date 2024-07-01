Feature: Criar novo usuário

  Scenario: Criar um novo usuário
    Given que o usuário deseja criar um novo usuário
    When o usuário envia um pedido POST para criar o usuário
    Then o usuário deve ser criado com sucesso
    And o status code da resposta deve ser 200
    