import dotenv from "dotenv"
dotenv.config()
export const env = {
    port : process.env.PORT || 8000,
    db : process.env.DB_URL_PG,
    secret: process.env.SECRET_KEY
}