import Joi from "joi";

export const createSearchHistoryDto = Joi.object({
  userId: Joi.number().integer().required(),
  query: Joi.string().required(),
});

export const updateSearchHistoryDto = Joi.object({
  query: Joi.string(),
});
