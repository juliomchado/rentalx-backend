# Cadastro de carro

**Requisitos funcionais**

[x] - Deve ser possível cadastrar um novo carro.

**Regra de negócio**

[x] - Não deve ser possível cadastrar um carro com uma placa já existente.
[x] - O carro deve ser cadastrado com disponibilidade por padrão.
[x] - O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**Requisitos funcionais**

[x] - Deve ser possível listar todos os carros disponíveis.
[x] - Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
[x] - Deve ser possível listar todos os carros disponíveis pelo nome da marca.
[x] - Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**Regra de negócio**

[x] - O usuário não precisa estar logado no sistema para listar os carros.

# Cadastro de Especificação no carro

**Requisitos funcionais**

[x] - Deve ser possível cadastrar uma especificação para um carro.
[] - Deve ser possível listar todas as especificações.
[x] - Deve ser possível listar todos os carros.

**Regra de negócio**

[x] - Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
[x] - Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
[x] - O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**Requisitos funcionais**

[x] - Deve ser possível cadastrar as imagens do carro.

**Requisitos não funcionais**

[x] - Utilizar o multer para upload de arquivos.

**Regra de negócio**

[x] - O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
[x] - O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel dos carros

**Requisitos funcionais**

[x] - Deve ser possível cadastrar um aluguel

**Regra de negócio**

[x] - O aluguel deve ter duração mínima de 24 horas.
[x] - Não deve ser possível cadastrar um novo aluguel casa já exista um aberto para o mesmo usuário.
[x] - Não deve ser possível cadastrar um novo aluguel casa já exista um aberto para o mesmo carro.
[x] - O usuário deve estar logado na aplicação
