import { User } from '../models/user';
/**
 * @param{User}user
 */
//  espera un usuario de tipo user
export const UserModelToLocalhost = (user) =>{
    const {
        avatar,
        balance,
        firstName,
        gender,
        id,
        isActive,
        lastName,
    } = user;
//ahora lo que vamos a regresar es un objeto igual como lo espera elbackend
return  {
    avatar,
    balance,
    first_name:firstName,
    gender,
    id,
    isActive,
    last_name:lastName,
} 

}