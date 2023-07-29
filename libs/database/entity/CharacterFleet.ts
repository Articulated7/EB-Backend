import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CharacterFleet {
  @Column()
  characterId: number

  @PrimaryColumn('bigint')
  fleetId: string

  @Column('text', { nullable: true })
  role: string | null

  @Column('bigint', { nullable: true })
  squadId: string | null

  @Column('bigint', { nullable: true })
  wingId: string | null
}
