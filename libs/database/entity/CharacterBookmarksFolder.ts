import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CharacterBookmarksFolder {
  @Column()
  characterId: number

  @PrimaryColumn()
  folderId: number

  @Column('text', { nullable: true })
  name: string | null
}
