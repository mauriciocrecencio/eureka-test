import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAdresses1615062745621 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'adresses',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true
            },
            {
              name: 'cep',
              type: 'varchar'
            },
            {
              name: 'street',
              type: 'varchar'
  
            },
            {
              name: 'complement',
              type: 'varchar'
  
            },
            {
              name: 'neighborhood',
              type: 'varchar'
            },
            {
              name: 'city',
              type: 'varchar'
  
            },
            {
              name: 'state',
              type: 'varchar'
  
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()'
            }
          ]
        }
        )
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('adresses')
    }

}
