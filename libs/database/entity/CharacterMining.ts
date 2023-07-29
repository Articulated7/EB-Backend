import { Column, Entity, Index } from 'typeorm'

@Entity()
@Index(
  ['characterId', 'date', 'solarSystemId', 'typeId'],
  { unique: true }
)
export class CharacterMining {
  @Column({ primary: true })
  characterId: number

  @Column('timestamp with time zone', { primary: true })
  date: Date

  @Column('bigint', { nullable: true })
  quantity: string | null

  @Column({ primary: true })
  solarSystemId: number

  @Column({ primary: true })
  typeId: number
}
