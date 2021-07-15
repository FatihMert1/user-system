import BaseEntity from "./base-entity";



export interface IRoleAction extends BaseEntity {
    
    role_value: number,
    role_name: string,
    role_group_id: number
}


class RoleAction implements IRoleAction {
    role_value: number;
    role_name: string;
    role_group_id: number;
    id: number;
    created_at: string;
    updated_at: string;
    is_deleted: boolean;

    constructor(role_value: number, role_name: string, role_group_id: number, id: number, created_at: string,
        updated_at: string, is_deleted: boolean) {
            
            this.role_value = role_value;
            this.role_name = role_name;
            this.role_group_id = role_group_id;
            this.id = id;
            this.created_at = created_at;
            this.updated_at = updated_at;
            this.is_deleted = is_deleted;
        }

}

export default RoleAction;