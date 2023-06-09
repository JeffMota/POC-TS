import joi from "joi";
export var movieSchema = joi.object({
    name: joi.string().required(),
    plataform: joi.string().required(),
    gender: joi.string().required(),
    watched: joi.boolean(),
    note: joi.number(),
    resume: joi.string()
});
export var movieUpdateSchema = joi.object({
    watched: joi.boolean().required(),
    note: joi.number(),
    resume: joi.string()
});
