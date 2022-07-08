import express from "express";
import { userRoutes } from "./Routes/user.routes";

import swaggerUi from "swagger-ui-express"

import swaggerFile from "./swagger.json"

import "./database"

const app = express();


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(express.json())

app.listen(3333, () => console.log("Servidor rodando !!!"));

app.use( "/users",userRoutes ) // Post para adicionar Usuarios...

app.use("/allUsers",userRoutes) // Get retorna todos os usuarios...

// app.use("/users", userRoutes) // Patch de edição de usuario para administrador...

// app.use("/users", userRoutes) // Get que retorna usuario pelo numero de ID



