import Gender from "../enums/gender";
import BaseEntity from "./base-entity";



export interface IUser extends BaseEntity {
    name: string,
    surname: string,
    age: number,
    email: string,
    public_address: string,
    password: string,
    password_salt: string,
    phone_number: string,
    gender: Gender
}

class User implements IUser {
    name: string;
    surname: string;
    age: number;
    email: string;
    public_address: string;
    password: string;
    password_salt: string;
    phone_number: string;
    gender: Gender;
    id: number;
    created_at: string;
    updated_at: string;
    is_deleted: boolean;

    constructor(name: string, surname: string, age: number, email: string, public_address: string, password: string,
        password_salt: string, phone_number: string, gender: Gender, id: number, created_at: string, updated_at: string, is_deleted: boolean) {
            this.name = name;
            this.surname = surname;
            this.age = age;
            this.email = email;
            this.public_address = public_address;
            this.password = password;
            this.password_salt = password_salt;
            this.phone_number = phone_number;
            this.gender = gender;
            this.id = id;
            this.created_at = created_at;
            this.updated_at = updated_at;
            this.is_deleted = is_deleted;
        }

}

export default User;