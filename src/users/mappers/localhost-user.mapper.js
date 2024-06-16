import { User } from "../models/user";
/**
 * 
 * @param {Like<User>} localhostUser 
 * @returns {User} retorna una instancia de un usuario
 */

//recibiremos el usuario comoo venga 
export const localhostUserToModel = (localhostUser)=>{
//regresar una nueva isntancia de nuestro usuario 
//desestructurar del locasalhostUser
const {
avatar,
balance,
first_name,
gender,
id,
isActive,
last_name,
} = localhostUser;

return new User({
avatar,
balance,
firstName: first_name,
gender,
id,
isActive,
lastName: last_name,
});

}