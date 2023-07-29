import { Column, Entity, Index } from 'typeorm'

@Index(['bookmarkId', 'corporationId'], {
  unique: true
})
@Entity()
export class CorporationBookmark {
  @Column({ primary: true })
  corporationId: number

  @Column({ primary: true })
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
