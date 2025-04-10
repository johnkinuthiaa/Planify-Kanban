"use client"
import Register from "@/app/(pages)/(auth)/register/page";
export default function Home() {
  return (
      <div>
          <div> main page</div>
          <div className={"flex items-center gap-2 "}>
              <button
                  className={"p-4 rounded bg-white text-black"}
                  onClick={(e)=>{
                      e.preventDefault()
                  }}> <a href={"/register"}>Register</a></button>
              <button>Login</button>
          </div>

          <Register/>
      </div>
  )
}
