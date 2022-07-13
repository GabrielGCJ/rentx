import { createConnection, getConnectionOptions } from 'typeorm';

console.log("Arquivo dataBase")
interface IOptions {
  host: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = 'database'; //Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
  createConnection({
    ...options,
  });
});

// import { createConnection } from "typeorm";

// createConnection()
























// import { createConnection } from "typeorm";

// createConnection()

// // import { DataSource } from "typeorm";

// // const dataSource = new DataSource({
// //     type:"postgres",
// //     host:"database", //nome dado ao serviço de banco de dados
// //     port: 5432,
// //     username:"docker",
// //     password:"ignite",
// //     database: "avalon"
// // })

// // dataSource.initialize();

// // const PostgresDataSource = new DataSource({
// //     type: "postgres",
// //     host: "localhost",
// //     port: 5432,
// //     username: "test",
// //     password: "test",
// //     database: "test",
    
// // })

// // PostgresDataSource.initialize();
