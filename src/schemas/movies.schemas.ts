import joi from "joi"

export const movieSchema = joi.object({
  name: joi.string().required(),
  plataformId: joi.number().required(),
  genders: joi.array().required(),
  watched: joi.boolean(),
  note: joi.number(),
  resume: joi.string()
})

export const movieUpdateSchema = joi.object({
  watched: joi.boolean().required(),
  note: joi.number(),
  resume: joi.string()
})