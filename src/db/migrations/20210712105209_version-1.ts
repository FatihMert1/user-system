import { Knex } from "knex";
import Gender from "../../domain/enums/gender";


export async function up(knex: Knex): Promise<void> {


    await knex.schema.createTable('users', (builder: Knex.CreateTableBuilder) => {

        builder.increments('id').primary();
        builder.date('created_at').notNullable().defaultTo(new Date().toLocaleDateString())
        builder.date('updated_at');
        builder.boolean('is_deleted').notNullable().defaultTo(false);
        
        builder.string('name').notNullable();
        builder.string('surname').notNullable();
        builder.integer('age').notNullable();
        builder.string('email',255).notNullable();
        builder.string('public_address').notNullable();
        builder.string('password').notNullable();
        builder.string('password_salt').notNullable();
        builder.string('phone_number').notNullable();
        builder.integer('gender').notNullable().defaultTo(Gender.NONE);

    });

    await knex.schema.createTable('employees', (builder: Knex.CreateTableBuilder) => {

        builder.increments('id').primary();
        builder.date('created_at').notNullable().defaultTo(new Date().toLocaleDateString())
        builder.date('updated_at');
        builder.boolean('is_deleted').notNullable().defaultTo(false);
        
        builder.integer('user_id').notNullable().references('users.id');
        builder.string('identification_number').notNullable();
    });

    await knex.schema.createTable('roles', (builder: Knex.CreateTableBuilder) => {
        builder.increments('id').primary();
        builder.date('created_at').notNullable().defaultTo(new Date().toLocaleDateString())
        builder.date('updated_at');
        builder.boolean('is_deleted').notNullable().defaultTo(false);

        builder.integer('role_type').notNullable();
    });

    await knex.schema.createTable('customer_admins', (builder: Knex.CreateTableBuilder) => {

        builder.increments('id').primary();
        builder.date('created_at').notNullable().defaultTo(new Date().toLocaleDateString())
        builder.date('updated_at');
        builder.boolean('is_deleted').notNullable().defaultTo(false);
        
        builder.integer('employee_id').notNullable().references('employees.id');
    });

    await knex.schema.createTable('customers', (builder: Knex.CreateTableBuilder) => {

        builder.increments('id').primary();
        builder.date('created_at').notNullable().defaultTo(new Date().toLocaleDateString())
        builder.date('updated_at');
        builder.boolean('is_deleted').notNullable().defaultTo(false);
        
        builder.integer('user_id').notNullable().references('users.id');
    });

    await knex.schema.createTable('role_groups', (builder: Knex.CreateTableBuilder) => {

        builder.increments('id').primary();
        builder.date('created_at').notNullable().defaultTo(new Date().toLocaleDateString())
        builder.date('updated_at');
        builder.boolean('is_deleted').notNullable().defaultTo(false);
        
        
        builder.string('role_group_name').notNullable();
    });

    await knex.schema.createTable('role_actions', (builder: Knex.CreateTableBuilder) => {

        builder.increments('id').primary();
        builder.date('created_at').notNullable().defaultTo(new Date().toLocaleDateString())
        builder.date('updated_at');
        builder.boolean('is_deleted').notNullable().defaultTo(false);
        
        builder.integer('role_value').notNullable();
        builder.string('role_name').notNullable();
        builder.integer('role_group_id').notNullable().references('role_groups.id');
    });

   

    await knex.schema.createTable('role_permissions', (builder: Knex.CreateTableBuilder) => {

        builder.increments('id').primary();
        builder.date('created_at').notNullable().defaultTo(new Date().toLocaleDateString())
        builder.date('updated_at');
        builder.boolean('is_deleted').notNullable().defaultTo(false);
        
        builder.integer('role_id').notNullable().references('roles.id');
        builder.integer('role_group_id').notNullable().references('role_groups.id');
        builder.integer('roles_value').notNullable();
    });

    await knex.schema.createTable('super_admins', (builder: Knex.CreateTableBuilder) => {

        builder.increments('id').primary();
        builder.date('created_at').notNullable().defaultTo(new Date().toLocaleDateString())
        builder.date('updated_at');
        builder.boolean('is_deleted').notNullable().defaultTo(false);
        
        builder.integer('user_id').notNullable().references('users.id');
    });

}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('roles');
}

