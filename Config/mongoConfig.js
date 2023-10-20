// Database configuration and connection
import mongoose from "mongoose"

const DB_URL = process.env.DB_URL
export default function connectDB(){

    mongoose.connect(DB_URL)
    .then(() => {
        console.log('OK')
})
.catch((err) => {
    console.log(err)
})
} 