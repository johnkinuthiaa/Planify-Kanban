"use client"
import {RegisterUser} from "@/api/auth/register";
import { useState } from "react";
import {useRouter} from "next/navigation";

const Register =()=>{
    const[username,setUsername] =useState<string>("")
    const[email,setEmail] =useState<string>("")
    const[password,setPassword] =useState<string>("")
    const[message,setMessage] =useState<string>("")
    const router =useRouter()
    return(
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <a href="#" className="flex items-center gap-2 self-center font-medium">
                    Planify Signup.
                </a>
                {message &&<div>{message}</div>}
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    RegisterUser({username, email, password}).then((response:string |undefined)=>{
                        if(typeof (response) ==="string"){
                            setTimeout(()=>{
                                setMessage("")
                            },3000)
                            setMessage(response)
                            if(response ==="User created successfully"){
                                router.push("/tasks")
                            }
                        }
                    })

                }}>
                    <div className="grid gap-6">
                        <div className={"flex flex-col gap-4 [&>button]:w-full [&>button]:p-3 [&>button]:gap-4 [&>button]:items-center" +
                            "justify-between [&>button]:h-fit " +
                            "[&>button]:cursor-pointer [&>button]:border [&>button]:border-gray-700  [&>button]:rounded-xl"}>
                            <button className={"flex"}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={"w-6 h-6 object-fit"}>
                                    <path
                                        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                                        fill="currentColor"
                                    />
                                </svg>
                                Login with Apple
                            </button>
                            <button  className={"flex"}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={"w-6 h-6 object-fit"}>
                                    <path
                                        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                        fill="currentColor"
                                    />
                                </svg>
                                Login with Google
                            </button>
                        </div>
                        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
                        </div>
                        <div className="grid gap-6 [&>div>input]:p-2 [&>div>input]:border [&>div>input]:border-gray-700
                            [&>div>input]:rounded [&>div>input]:outline-none [&>div>input]:focus:outline [&>div>input]:active:outline-white ">
                            <div className="grid gap-2">
                                <label htmlFor="username">Username</label>
                                <input
                                    id="username"
                                    type="username"
                                    placeholder="Kingkaid100"
                                    required={true}
                                    onChange={(e)=>setUsername(e.target.value)}
                                    minLength={3}
                                    maxLength={20}
                                />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required={true}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    minLength={6}
                                    maxLength={20}
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <label htmlFor="password">Password</label>
                                </div>
                                <input
                                    id="password"
                                    type="password"
                                    required={true}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    minLength={10}
                                    maxLength={20}
                                />
                            </div>
                            <button type="submit" className="w-full bg-white text-black rounded p-3
                            text-center font-bold cursor-pointer hover:bg-gray-300">
                                Register
                            </button>
                        </div>
                        <div className="text-center text-sm">
                            Already have an account?{" "}
                            <a href="/login" className="underline underline-offset-4">
                                Login
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Register