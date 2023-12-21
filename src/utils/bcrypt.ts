import * as bcrypt from'bcrypt';

export  function encodePassword(rawPassword:String) {

        const saltRounds= bcrypt.genSaltSync();
        const encodedPassword =  bcrypt.hashSync(rawPassword,saltRounds);
        console.log('from  bcrypt')
        console.log(encodedPassword)
        return encodedPassword;
    

}
export function comparePasswords(rawPassword: String,hashValue:String){
return bcrypt.compareSync(rawPassword,hashValue);
}