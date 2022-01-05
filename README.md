# Cadastro de carro

**Requisitos funcionais**

[] - Deve ser possível cadastrar um novo carro.

**Regra de negócio**

[x] - Não deve ser possível cadastrar um carro com uma placa já existente.
[x] - O carro deve ser cadastrado com disponibilidade por padrão.
[] - O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**Requisitos funcionais**

[] - Deve ser possível listar todos os carros disponíveis.
[] - Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
[] - Deve ser possível listar todos os carros disponíveis pelo nome da marca.
[] - Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**Regra de negócio**

[] - O usuário não precisa estar logado no sistema para listar os carros.

# Cadastro de Especificação no carro

**Requisitos funcionais**

[] - Deve ser possível cadastrar uma especificação para um carro.
[] - Deve ser possível listar todas as especificações.
[] - Deve ser possível listar todos os carros.

**Regra de negócio**

[] - Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
[] - Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
[] - O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**Requisitos funcionais**

[] - Deve ser possível cadastrar a imagem do carro.
[] - Deve ser possível listar todos os carros.

**Requisitos não funcionais**

[] - Utilizar o multer para upload de arquivos.

**Regra de negócio**

[] - O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
[] - O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel dos carros

**Requisitos funcionais**

[] - Deve ser possível cadastrar um aluguel

**Regra de negócio**

[] - O aluguel deve ter duração mínima de 24 horas.
[] - Não deve ser possível cadastrar um novo aluguel casa já exista um aberto para o mesmo usuário.
[] - Não deve ser possível cadastrar um novo aluguel casa já exista um aberto para o mesmo carro.
