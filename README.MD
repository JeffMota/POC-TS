# Antes de qualquer coisa...

- Instale as depêndencias 'npm install'

- Crie um banco de dados com o nome 'poc' e outro com o nome 'poc_test' para realizar os testes

- Configure os arquivos .env.development e .env.test com seus respectivos dados corretamente

- Execute as migrations 'npm run dev:migration:generate' e 'npm run test:migration:generate'

- Popule o banco 'npm run dev:seed', caso queira pode também popular o banco de testes 'npm run test:seed'

- Para executar os testes use o comando 'npm run test'

## /POST

> /movies - Recebe pelo body um json no seguinte formato:

    {
        name: string,
        plataform: number,
        watched: boolean,
        genders: number[] < array com os id's dos gêneros desse filme
    }

> /genders - Recebe um json no formato:

    {
      name: string
    }

> /plataforms - Recebe um json no formato:

    {
      name: string
    }

## /GET

> /movies - Retorna uma lista com todos os filmes. Pode receber as query strings "gender" ou "plataform" para filtrar a lista por gênero ou plataforma respectivamente

> /genders - Retorna uma lista com todos os gêneros

> /plataforms - Retorna uma lista com todos os gêneros

## /PUT

> /movies/:id - Recebe pelo o body um json no seguinte formato:

    {
        watched: boolean,
        note: number(opcional),
        resume: string(opcional)
    }

## DELETE

> /movies/:id - Deleta do banco de dados o filme ao qual pertence o id passado pelo params, se não houver nenhum filme com esse id retorna um statusCode 404

> /genders/:id - Deleta o gênero especificado

> /plataforms/:id - Deleta a plataforma especificada
