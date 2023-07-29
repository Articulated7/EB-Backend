import { Column, Entity, Index } from 'typeorm'

@Entity()
@Index(['characterId', 'labelId'], {
  unique: true
})
export class CharacterContactLabel {
  @Column({ primary: true })
  characterId: number

  @Column('bigint', { primary: true })
  labelId: string

  @Column('text', { nullable: true })
  labelName: string | null
}
