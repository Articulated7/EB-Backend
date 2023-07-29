import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class DogmaDynamicItem {
  @PrimaryColumn('bigint')
  itemId: string

  @Column({ nullable: true })
  typeId: number | null

  @Column({ nullable: true })
  createdBy: number | null

  @Column('jsonb', { nullable: true })
  dogmaAttributes: object | null

  @Column('jsonb', { nullable: true })
  dogmaEffects: object | null

  @Column({ nullable: true })
  mutatorTypeId: number | null

  @Column({ nullable: true })
  sourceTypeId: number | null
}
