import dotenv from 'dotenv'
dotenv.config()

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/api_jwt_ts"
export const PORT = process.env.PORT || 4000