# Documentação
### Primeiros passos

Para rodar a aplicação de modo local tenha pré-configurado o Node.js na versão mais recente.
Feito isso execute no diretório raiz do projeto
> npm install 

Feito isso verifique se a aplicação está funcinando corretamente com o comando
> npm run test

Selecione a opção executar todos os testes ou aperte 'a'

Feito isso, validando que o funcionamento está correto execute o comando abaixo para rodar a aplicação localmente
> npm start

### API e SOCKET

Os serviços de api e socket por padrão consomem os endopoints da api em 
> http://35.199.76.90:8080

Certifique-se que deseja realmente consumir esta api e que tem permissão de CORS para o mesmo.
Caso deseje executar consumindo de outro endpoint deverá alterar esta configuração no arquivo config.json no diretório raiz da aplicação.

### Colocando em produção

Para colocar a aplicação em funcionamento em um servidor é possível adotar duas abordagens:

- Executar de maneira estática com o comando npm run build e fazendo o upload dos arquivos da pasta build para o webserver
- Criando uma imagem docker a partir do Dockerfile no diretório raiz desta aplicação
