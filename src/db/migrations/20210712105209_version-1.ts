import { randomUUID } from "crypto";
import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {

    await knex.schema.createTable('roles', (builder: Knex.CreateTableBuilder) => {
        builder.uuid('uuid').primary().unique().notNullable().defaultTo(randomUUID());
        builder.string('role_type').unique();
        builder.date('created_at').notNullable().defaultTo(new Date().toLocaleDateString())
        builder.date('updated_at');
        builder.boolean('is_deleted').notNullable().defaultTo(false);
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('roles');
}

