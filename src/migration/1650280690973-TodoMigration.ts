import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class TodoMigration1650280690973 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'todos',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'user_id',
            type: 'int',
          },
          {
            name: 'todolist_id',
            type: 'int',
          },
          {
            name: 'title',
            type: 'string',
          },
          {
            name: 'status',
            type: 'boolean'
          },
          {
            name: 'task_text',
            type: 'text'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('todos');
  }
}
