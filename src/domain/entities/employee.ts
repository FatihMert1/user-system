import BaseEntity from "./base-entity";



export interface IEmployee extends BaseEntity {

    user_id: number,
    identification_number: string
}


class Employee implements IEmployee {

    user_id: number;
    identification_number: string;
    id: number;
    created_at: string;
    updated_at: string;
    is_deleted: boolean;


    constructor(user_id: number, identification_number: string, id: number, created_at: string, updated_at: string, is_deleted: boolean) {
        this.user_id = user_id;
        this.identification_number = identification_number;
        this.id = id;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.is_deleted = is_deleted;
    }
}

export default Employee;