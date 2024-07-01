# Feature: Fazer login com usuário cadastrado

#   Scenario: Fazer login com usuário cadastrado
#     Given que o usuário deseja fazer login com credenciais válidas
#     When  o usuário envia um pedido POST para fazer login
#     Then o login deve ser bem-sucedido
    

Feature: Login no site

  Scenario: Fazer login com usuário cadastrado
    Given que o usuário deseja fazer login com credenciais válidas
    Then o login deve ser bem-sucedido   