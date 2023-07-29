import { Column, Entity, Index } from 'typeorm'

@Entity()
@Index(['characterId', 'contactId'], { unique: true })
export class CharacterContact {
  @Column({ primary: true })
  characterId: number

  @Column({ primary: true })
  contactId: number

  @Column('text', { nullable: true })
  contactType: string | null

  @Column('boolean', { nullable: true })
  isBlocked: boolean | null

  @Column('boolean', { nullable: true })
  isWatched: boolean | null

  @Column('jsonb', { nullable: true })
  labelIds: object | null

  @Column('double precision', {
    nullable: true
  })
  standing: number | null
}
