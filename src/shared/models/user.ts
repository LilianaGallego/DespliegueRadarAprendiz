import { Average } from "./average";


export interface User {
    id?: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    role: Role;
    averages?:Average[];
}

 enum Role {
    ROLE_APPRENTICE = 'ROLE_APPRENTICE',
    ROLE_ADMIN = 'ROLE_ADMIN',
    ROLE_OPERATION = 'ROLE_OPERATION'
  }
