Feature: Login no site

  Scenario: Fazer login com usuário cadastrado
    Given que o usuário deseja fazer login com credenciais válidas
    Then o login deve ser bem-sucedido   