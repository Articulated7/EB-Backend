import { Column, Entity, Index } from 'typeorm'

@Index(['characterId', 'fromId'], { unique: true })
@Entity()
export class CharacterStanding {
  @Column({ primary: true })
  characterId: number

  @Column({ primary: true })
  fromId: number

  @Column('text', { nullable: true })
  fromType: string | null

  @Column('double precision', {
    nullable: true
  })
  standing: number | null
}
