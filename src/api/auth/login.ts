type LoginProps ={
    username:string,
    password:string
}
export const LoginUser =async ({username,password}:LoginProps)=>{
    const loginUrl ="http://localhost:8080/api/v1/user/login"
    const myHeaders =new Headers()
    myHeaders.append("Content-Type","application/stream+json")
    try{
        const response =await fetch(loginUrl,{
            method:"POST",
            body:JSON.stringify({
                username,password
            }),
            headers:myHeaders
        })
        if(response.ok){
            const data =await response.json()
            if(data?.statusCode ===200){
                return "Login successful"
            }else{
                console.log(data?.message)
                return data?.message
            }
        }
    }catch (e) {
        console.log(`${e}`)
        return `Error:>> ${e}`
    }

}