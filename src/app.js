import express from "express";
import corsMiddleware from "./middlewares/cors.js";
import logger from "./middlewares/logger.js";
import errorHandler from "./middlewares/errorHandler.js";

// Rotas
import userRoutes from "./modules/users/user.routes.js";
import authRoutes from "./modules/auth/auth.routes.js";

const app = express();

app.use(express.json());
app.use(corsMiddleware);
app.use(logger);

// Rotas principais
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// Middleware de erros
app.use(errorHandler);

export default app;
