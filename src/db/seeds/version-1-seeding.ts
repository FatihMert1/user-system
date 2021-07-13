import { randomUUID } from "crypto";
import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("roles").del();

    // Inserts seed entries
    await knex("roles").insert([
        { uuid: randomUUID(), role_type: "SUPER ADMIN"},
        { uuid: randomUUID(), role_type: "CUSTOMER ADMIN"},
        { uuid: randomUUID(), role_type: "USER"}
    ]);
};
