import Joi from "joi";

export const createStockDto = Joi.object({
  productId: Joi.number().integer().required(),
  quantity: Joi.number().integer().min(0).required(),
  pharmacyId: Joi.number().integer().required(),
});

export const updateStockDto = Joi.object({
  quantity: Joi.number().integer().min(0),
});
