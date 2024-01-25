import { User } from "./UserModel.js";

class UserClient extends User{
 constructor(name, email, password, username){
   super(name,email, password);
   this.username = username;
   this.coins = 0;
 }
}
export { UserClient }