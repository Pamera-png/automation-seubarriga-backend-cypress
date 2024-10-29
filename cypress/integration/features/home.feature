#language: pt 
Funcionalidade: saldo

Contexto: Realizar login com sucesso
Dado que realizo login com sucesso

Cenário: resetar conta com sucesso
 Então redefino uma conta com sucesso

 Cenário: consultar saldo
 Quando consulto o saldo da conta
 E altero uma movimentacao
 Então consulto o saldo alterado