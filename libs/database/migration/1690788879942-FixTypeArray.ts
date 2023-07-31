import { MigrationInterface, QueryRunner } from 'typeorm'

export class FixTypeArray1690788879942 implements MigrationInterface {
  name = 'FixTypeArray1690788879942'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "type_" DROP COLUMN "dogmaAttributes"')
    await queryRunner.query(
      'ALTER TABLE "type_" ADD "dogmaAttributes" jsonb DEFAULT \'[]\''
    )
    await queryRunner.query('ALTER TABLE "type_" DROP COLUMN "dogmaEffects"')
    await queryRunner.query(
      'ALTER TABLE "type_" ADD "dogmaEffects" jsonb DEFAULT \'[]\''
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "type_" DROP COLUMN "dogmaEffects"')
    await queryRunner.query(
      'ALTER TABLE "type_" ADD "dogmaEffects" jsonb array DEFAULT \'{}\''
    )
    await queryRunner.query('ALTER TABLE "type_" DROP COLUMN "dogmaAttributes"')
    await queryRunner.query(
      'ALTER TABLE "type_" ADD "dogmaAttributes" jsonb array DEFAULT \'{}\''
    )
  }
}
