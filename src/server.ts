import express, { request, response } from "express";
import { userRoutes } from "./Routes/user.routes";

const app = express();

app.use(express.json())

app.listen(3333, () => console.log("Servidor rodando !!!"));

app.use( "/users",userRoutes )

app.use("/allUsers",userRoutes)

app.use("/users", userRoutes)


// tá funcionando




