import BaseEntity from "./base-entity";



export interface IRoleGroup extends BaseEntity {

    role_group_name: string,

}

class RoleGroup implements IRoleGroup {
    role_group_name: string;
    id: number;
    created_at: string;
    updated_at: string;
    is_deleted: boolean;

    constructor(role_group_name: string, id: number, created_at: string, updated_at: string, is_deleted: boolean) {
        this.role_group_name = role_group_name;
        this.id = id;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.is_deleted = is_deleted;
    }
}

export default RoleGroup;