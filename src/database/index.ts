import { createConnection } from "typeorm";

createConnection()

// import { DataSource } from "typeorm";

// const dataSource = new DataSource({
//     type:"postgres",
//     host:"database", //nome dado ao serviço de banco de dados
//     port: 5432,
//     username:"docker",
//     password:"ignite",
//     database: "avalon"
// })

// dataSource.initialize();