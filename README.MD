# Antes de qualquer coisa...

- Instale as depêndencias 'npm install'

- Crie um banco de dados com o nome 'poc'

- Execute as migrations 'npx prisma migrate dev'

- Popule o banco 'npm run prisma:seed'

## /POST

> /movies - Recebe pelo body um json no seguinte formato:

    {
        name: string,
        plataform: string,
        watched: boolean,
        genders: [] < array com os id's dos gêneros desse filme
    }

> /genders - Recebe um json no formato:

    {
      name: string
    }

## /GET

> /movies - Retorna uma lista com todos os filmes. Pode receber as query strings "gender" ou "plataform" para filtrar a lista por gênero ou plataforma respectivamente

> /genders - Retorna uma lista com todos os gêneros

## /PUT

> /movies/:id - Recebe pelo o bodu um json no seguinte formato:

    {
        watched: boolean,
        note: number(opcional),
        resume: string(opcional)
    }

## DELETE

> /movies/:id - Deleta do banco de dados o filme ao qual pertence o id passado pelo params, se não houver nenhum filme com esse id retorna um statusCode 404
