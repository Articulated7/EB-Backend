import { Column, Entity, Index } from 'typeorm'

@Entity()
@Index(['characterId', 'recordId'], {
  unique: true
})
export class CharacterCorporationHistory {
  @Column({ primary: true })
  characterId: number

  @Column()
  corporationId: number

  @Column('boolean', { nullable: true })
  isDeleted: boolean | null

  @Column({ primary: true })
  recordId: number

  @Column('timestamp with time zone', { nullable: true })
  startDate: Date | null
}
