import { Column, Entity, Index, PrimaryColumn } from 'typeorm'

@Entity()
export class CharacterLocation {
  @PrimaryColumn()
  characterId: number

  @Column({ nullable: true })
  solarSystemId: number | null

  @Column({ nullable: true })
  stationId: number | null

  @Column('bigint', { nullable: true })
  structureId: string | null
}
