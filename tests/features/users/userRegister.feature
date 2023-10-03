Feature: Cadastro de usuário

  Scenario: Cadastro realizado com sucesso
    Given estou na tela de cadastro do sistema
    When preencho o email
    And digito a senha
    And salvo
    Then o sistema apresenta a mensagem de sucesso

  Scenario: Cadastro não realizado - e-mail já cadastrado
    Given estou na tela de cadastro do sistema
    When preencho meu email com "existente@gmail.com"
    And digito a senha
    And salvo
    Then o sistema apresenta a mensagem de falha
