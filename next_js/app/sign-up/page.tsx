'use client'



import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SignUpPage() {

    return (

        <div className ="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gray-950">
           
            <Card>
                   <CardHeader>
                    <CardTitle>
                         Sign Up
                    </CardTitle>
                       <CardDescription>
                           Create an account to start Tracking your Job Applications
                       </CardDescription>
                   </CardHeader>

                <form>
                    
                </form>  

            </Card>
        </div>
    )
}