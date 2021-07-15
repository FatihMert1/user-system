import BaseEntity from "./base-entity";
import RoleType from '../enums/role-type'
import RolePermission from "./role-permission";


interface IRole extends BaseEntity {

    role_type: RoleType,
    role_permissions: Array<RolePermission>

}

class Role implements IRole {
    
    id: number;
    created_at: string;
    updated_at: string;
    is_deleted: boolean;
    role_type: RoleType;
    role_permissions: Array<RolePermission>

    constructor(id: number, created_at: string, updated_at: string, is_deleted: boolean, role_type: RoleType, role_permissions: Array<RolePermission>) {
        
        this.id = id;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.is_deleted = is_deleted;
        this.role_type = role_type;
        this.role_permissions = role_permissions;
    }
    
}

export default Role;