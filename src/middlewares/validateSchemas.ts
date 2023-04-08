import { Response, Request } from "express"

export default function validateSchema(schema){
    return(req: Request, res: Response, next) => {

        const {error} = schema.validate(req.body, {aborEarly: false})
        if(error){
            const err = error.details.map(detail => detail.message)
            return res.status(422).send(err)
        }

        next()
    }
}