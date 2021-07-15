import BaseEntity from "./base-entity";




export interface ICustomer extends BaseEntity {

    user_id: number
}


class Customer implements ICustomer {
    user_id: number;
    id: number;
    created_at: string;
    updated_at: string;
    is_deleted: boolean;


    constructor(user_id: number, id: number, created_at: string, updated_at: string, is_deleted: boolean) {
        this.user_id = user_id;
        this.id = id;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.is_deleted = is_deleted;
    }
}


export default Customer;