import BaseEntity from "./base-entity";



export interface ICustomerAdmin extends BaseEntity {

    employee_id: number
}

class CustomerAdmin implements ICustomerAdmin {
    employee_id: number;
    id: number;
    created_at: string;
    updated_at: string;
    is_deleted: boolean;


    constructor(employee_id: number, id: number, created_at: string, updated_at: string, is_deleted: boolean) {
        this.employee_id = employee_id;
        this.id = id;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.is_deleted = is_deleted;
    }
}

export default CustomerAdmin;