
const basicAuth = require('basic-auth');

const logBasicAuth =  async(req:any, res:any, next:any) => {
    const user = await basicAuth(req)
    

    const username: string= "SuperServ"
    const password: string= "agile1234556"

    if (user && user.name.toLowerCase() === username.toLowerCase() && user.pass === password) {
        next()
       
       
    }else{
        res.status(401).send('Login Incorrecto')

}
}

export default logBasicAuth