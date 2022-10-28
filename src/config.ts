import dotenv from 'dotenv'
dotenv.config()

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/api_jwt_ts"
export const PORT = process.env.PORT || 4000