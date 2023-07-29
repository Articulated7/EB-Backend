import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CharacterBlueprint {
  @Column()
  characterId: number

  @PrimaryColumn('bigint')
  itemId: string

  @Column('text', { nullable: true })
  locationFlag: string | null

  @Column('bigint', { nullable: true })
  locationId: string | null

  @Column({ nullable: true })
  materialEfficiency: number | null

  @Column({ nullable: true })
  quantity: number | null

  @Column({ nullable: true })
  runs: number | null

  @Column({ nullable: true })
  timeEfficiency: number | null

  @Column({ nullable: true })
  typeId: number | null
}
