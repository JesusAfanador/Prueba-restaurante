import { createPool } from "mysql2/promise";
import dotenv from 'dotenv';

// Carga las variables de entorno desde el archivo .env
dotenv.config();

// Lee las variables de entorno para configurar la conexión
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE ,DB_PORT } = process.env;

// Crea la pool de conexiones
export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT
});