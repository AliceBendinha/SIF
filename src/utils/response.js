export function success(res, data, message = "Operação bem-sucedida") {
  return res.status(200).json({ status: "success", message, data });
}

export function created(res, data, message = "Criado com sucesso") {
  return res.status(201).json({ status: "success", message, data });
}
