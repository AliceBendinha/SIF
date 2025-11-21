import Joi from "joi";

export const createPharmacyDto = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  phone: Joi.string().required(),
});

export const updatePharmacyDto = Joi.object({
  name: Joi.string(),
  address: Joi.string(),
  phone: Joi.string(),
});
