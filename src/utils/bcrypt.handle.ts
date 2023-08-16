import{ compare, hash } from 'bcryptjs'

const encrypt = async (pass: string ) => {
    const encrypted = await hash(pass, 8);
    return encrypted; 
 
}

const verified = async (pass:string, encrypted:string ) => {
     const itsCorrect = await compare(pass, encrypted);
        return itsCorrect;
}

    export { encrypt, verified }