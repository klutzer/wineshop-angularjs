# WineShop AngularJS
Front-end em AngularJS do sistema básico para controle de vendas de vinho. Acesse o [back-end aqui](https://github.com/klutzer/wineshop).

Para executar a aplicação basta clonar o projeto e colocá-lo em um web server de sua escolha. Abaixo dois exemplos utilizando o npm e outro utilizando um módulo do python.

### Fazendo deploy no http-server
Primeiro instale o http-server utilizando o npm (Linux ou Mac execute com `sudo`).
```shell
npm install -g http-server
```
Então, supondo que você clonou o projeto no diretório *"wineshop-site"*, dentro deste diretório execute:
```shell
http-server -p 3000 -o
```

### Fazendo deploy utilizando SimpleHTTPServer
Caso você tenha o python instalado, também é possível executar a aplicação rodando o seguinte comando de dentro do diretório do projeto:
```shell
python -m SimpleHTTPServer 3000
```
A porta em ambos os casos foi definida como a 3000, porém qualquer outra porta pode ser utilizada. É importante apenas atentar para o detalhe de que o back-end por padrão cria um servidor Jetty na porta 8080, então desconsidere-a para o front-end.

### Live Demo
Também é possível acessar a aplicação direto da web, pelo link <http://cloud.2me.net.br/wineshop/site>.

## Login na aplicação
- **Usuário:** test@test.com
- **Senha:** 123

*O login e senha são testados localmente, apenas para demonstrar a possível execução desta aplicação em um ambiente autenticado.*