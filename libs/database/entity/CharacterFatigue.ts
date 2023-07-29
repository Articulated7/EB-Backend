import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CharacterFatigue {
  @PrimaryColumn()
  characterId: number

  @Column('timestamp with time zone', {
    nullable: true
  })
  jumpFatigueExpireDate: Date | null

  @Column('timestamp with time zone', { nullable: true })
  lastJumpDate: Date | null

  @Column('timestamp with time zone', {
    nullable: true
  })
  lastUpDateDate: Date | null
}
