import { Column, Entity, Index } from 'typeorm'

@Index(['contactId', 'corporationId'], {
  unique: true
})
@Entity()
export class CorporationContact {
  @Column({ primary: true })
  corporationId: number

  @Column({ primary: true })
  contactId: number

  @Column('text', { nullable: true })
  contactType: string | null

  @Column('boolean', { nullable: true })
  isWatched: boolean | null

  @Column('jsonb', { nullable: true })
  labelIds: object | null

  @Column('double precision', {
    nullable: true
  })
  standing: number | null
}
