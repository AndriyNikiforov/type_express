import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "dev",
  password: "dev",
  database: "dev",
  synchronize: false,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
