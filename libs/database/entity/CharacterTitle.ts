import { Column, Entity, Index } from 'typeorm'

@Index(['characterId', 'titleId'], { unique: true })
@Entity()
export class CharacterTitle {
  @Column({ primary: true })
  characterId: number

  @Column('text', { nullable: true })
  name: string | null

  @Column({ primary: true })
  titleId: number
}
