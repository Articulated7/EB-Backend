import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CharacterBookmark {
  @Column()
  characterId: number

  @PrimaryColumn()
  bookmarkId: number

  @Column('jsonb', { nullable: true })
  coordinates: object | null

  @Column('timestamp with time zone', { nullable: true })
  created: Date | null

  @Column({ nullable: true })
  creatorId: number | null

  @Column({ nullable: true })
  folderId: number | null

  @Column('jsonb', { nullable: true })
  item: object | null

  @Column('text', { nullable: true })
  label: string | null

  @Column({ nullable: true })
  locationId: number | null

  @Column('text', { nullable: true })
  notes: string | null
}
