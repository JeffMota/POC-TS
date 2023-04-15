import joi from 'joi'

export const genderSchema = joi.object({
  name: joi.string().required()
})