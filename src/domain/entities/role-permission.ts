import BaseEntity from "./base-entity";



interface IRolePermission extends BaseEntity {

    role_id: number,
    role_group_id: number,
    roles_value: number
}


class RolePermission implements IRolePermission {
    role_id: number;
    role_group_id: number;
    roles_value: number;
    id: number;
    created_at: string;
    updated_at: string;
    is_deleted: boolean;


    constructor(role_id: number, role_group_id: number, roles_value: number, id: number, created_at: string, updated_at: string, is_deleted: boolean){

        this.role_id = role_id;
        this.role_group_id = role_group_id;
        this.roles_value = roles_value;
        this.id = id;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.is_deleted = is_deleted;
    }
}


export default RolePermission;