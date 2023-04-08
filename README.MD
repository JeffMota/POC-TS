# /POST

> /movies - Recebe pelo body um json no seguinte formato:

    {
        name: string,
        plataform: string,
        watched: boolean,
    }

# /GET

> /movies - Retorna um lista com todos os filmes. Pode receber as query strings "gender" ou "plataform" para filtrar a lista por gênero ou plataforma respectivamente

# /PUT

> /movies/:id - Recebe pelo o bodu um json no seguinte formato:

    {
        watched: boolean,
        note: number(opcional),
        resume: string(opcional)
    }

# DELETE

> /movies/:id - Deleta do banco de dados o filme ao qual pertence o id passado pelo params, se não houver nenhum filme com esse id retorna um statusCode 404
