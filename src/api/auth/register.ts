
type RegisterProps ={
    username:string,
    email:string,
    password:string
}
export const RegisterUser = async ({username,email,password}:RegisterProps)=>{
    const registerUrl ="http://localhost:8080/api/v1/user/register"
    const myHeaders =new Headers()
    myHeaders.append("Content-Type","application/stream+json")
    try{
        const response =await fetch(registerUrl,{
            method:"POST",
            body:JSON.stringify({
                username,
                email,
                password
            }),
            headers:myHeaders
        })
        if(response.ok){
            const data =await response.json()
            if(data.statusCode !=201){
                return (`Error creating user: ${data?.message}`)
            }else{
                localStorage.setItem("User",JSON.stringify(data?.user))
                return ("User created successfully")
            }
        }
    }catch (e) {
        return `Error>>${e}`
    }

}