import { Column, Entity, Index } from 'typeorm'

@Index(['corporationId', 'folderId'], {
  unique: true
})
@Entity()
export class CorporationBookmarkFolder {
  @Column({ primary: true })
  corporationId: number

  @Column({ nullable: true })
  creatorId: number | null

  @Column({ primary: true })
  folderId: number

  @Column('text', { nullable: true })
  name: string | null
}
