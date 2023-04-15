import joi from 'joi'

export const plataformSchema = joi.object({
  name: joi.string().required()
})