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

### Build de produção
Em ambos os casos acima foi utilizado o próprio diretório do projeto para deploy. Quando colocamos um sistema em produção, é comum realizarmos operações em cima dos scripts e bibliotecas utilizadas, a fim de minimizar, obfuscar ou agrupar arquivos, por exemplo. Para isso foi utilizado o [gulp](http://gulpjs.com), que automatiza o build da aplicação.

Para gerar o build de produção, na raiz do projeto execute:
```shell
npm install
gulp --backEndHost localhost:8080
```
Após isso, será gerado o diretório `/dist`, com a url do back-end configurada para acesso em `http://localhost:8080/wineshop/api`. No caso deste host (localhost:8080), não é necessário passar o parâmetro `backEndHost`, pois ele já é o default.

As duas opções de deploy mostradas acima também podem ser feitas a partir do diretório `dist`.

### Live Demo
Também é possível acessar a aplicação direto da web, pelo link <http://cloud.2me.net.br/wineshop/site>.

## Login na aplicação
- **Usuário:** test@test.com
- **Senha:** 123

*O login e senha são testados localmente, apenas para demonstrar a possível execução desta aplicação em um ambiente autenticado.*