import { betterAuth } from "better-auth"
import { mongodbAdapter } from "better-auth/adapters/mongodb"
import { MongoClient } from "mongodb"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import initUserBoard from "../init-user-board"


const client = new MongoClient(process.env.MONGO_URI!)
const db = client.db()


export const auth = betterAuth({

    database : mongodbAdapter(db , {
        client
    }) ,
    emailAndPassword : {
        enabled : true ,
    },

   databaseHooks: {
  user: {
    create: {
      after: async (user) => {
      

        try {
          const board = await initUserBoard(user.id);

       
        } catch (error) {
         
          throw error;
        }
      },
    },
  },
},

}) ;

export async function getSession(){

    const result = await auth.api.getSession({
        headers : await headers()
    })

    return result 
}

export async function signOut(){

    const result = await auth.api.signOut({
        headers : await headers()
    })

    if(result.success){
        redirect("/sign-in")
    }
}