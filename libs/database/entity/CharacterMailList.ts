import { Column, Entity, Index } from 'typeorm'

@Entity()
@Index(['characterId', 'mailingListId'], {
  unique: true
})
export class CharacterMailList {
  @Column({ primary: true })
  characterId: number

  @Column({ primary: true })
  mailingListId: number

  @Column('text', { nullable: true })
  name: string | null
}
