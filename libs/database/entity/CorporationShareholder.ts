import { Column, Entity, Index } from 'typeorm'

@Index(['corporationId', 'shareholderId'], {
  unique: true
})
@Entity()
export class CorporationShareholder {
  @Column({ primary: true })
  corporationId: number

  @Column('bigint', { nullable: true })
  shareCount: string | null

  @Column({ primary: true })
  shareholderId: number

  @Column('text', { nullable: true })
  shareholderType: string | null
}
