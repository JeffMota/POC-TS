import joi from "joi"

export const movieSchema = joi.object({
    name: joi.string().required(),
    plataform: joi.string().required(),
    gender: joi.string().required(),
    watched: joi.boolean(),
    note: joi.number(),
    resume: joi.string()
})

export const movieUpdateSchema = joi.object({
    id:joi.number().required(),
    watched: joi.boolean().required(),
    note: joi.number(),
    resume: joi.string()
})