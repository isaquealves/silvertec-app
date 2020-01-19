import { v4String } from 'uuid/interfaces';


export class User {
  id: v4String;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  username: string;
  token: string;
}
