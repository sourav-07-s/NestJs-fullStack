import { getSession } from "@/lib/Auth/auth"

 
 
 
 export default async function dashboard() {
  const session = await  getSession() 

    return (
        <div>dashboard page</div>
    )
}