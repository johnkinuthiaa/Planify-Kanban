"use client"

export default function Home() {
  return (
      <div>
          <div> main page</div>
          <div className={"flex items-center gap-2 [&>button]:rounded [&>button]:p-2" +
              " [&>button]:cursor-pointer [&>button]:hover:opacity-90 "}>
              <button
                  className={"font-bold rounded bg-white text-black"}
                  onClick={(e)=>{
                      e.preventDefault()
                  }}><a href={"/register"}>Register</a></button>
              <button
                  className={"font-bold rounded bg-blue-500 text-white"}
                  onClick={(e)=>{
                      e.preventDefault()
                  }}><a href={"/login"}>Login</a></button>
          </div>
      </div>
  )
}
