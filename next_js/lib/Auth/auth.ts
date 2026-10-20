import { betterAuth } from "better-auth"
import { mongodbAdapter } from "better-auth/adapters/mongodb"
import { MongoClient } from "mongodb"


const client = new MongoClient(process.env.MONGO_URI!)
const db = client.db()


export const auth = betterAuth({

    database : mongodbAdapter(db , {
        client
    }) ,
    emailandPassword : {
        enabled : true ,
    }

})