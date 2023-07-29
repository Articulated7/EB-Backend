import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CharacterClone {
  @PrimaryColumn()
  characterId: number

  @Column('jsonb', { nullable: true })
  homeLocation: object | null

  @Column('jsonb', { nullable: true })
  jumpClones: object | null

  @Column('timestamp with time zone', {
    nullable: true
  })
  lastCloneJumpDate: Date | null

  @Column('timestamp with time zone', {
    nullable: true
  })
  lastStationChangeDate: Date | null
}
