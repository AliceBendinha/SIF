import Joi from "joi";

export const createProductDto = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().allow(""),
  manufacturer: Joi.string().required(),
  price: Joi.number().positive().required(),
  pharmacyId: Joi.number().integer().required(),
});

export const updateProductDto = Joi.object({
  name: Joi.string(),
  description: Joi.string().allow(""),
  manufacturer: Joi.string(),
  price: Joi.number().positive(),
  pharmacyId: Joi.number().integer(),
});
