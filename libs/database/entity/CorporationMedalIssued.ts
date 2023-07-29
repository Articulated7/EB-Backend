import { Column, Entity, Index } from 'typeorm'

@Index(['characterId', 'medalId'], {
  unique: true
})
@Entity()
export class CorporationMedalIssued {
  @Column({ nullable: true })
  corporationId: number | null

  @Column({ primary: true })
  characterId: number

  @Column('timestamp with time zone', { nullable: true })
  issuedAt: Date | null

  @Column({ nullable: true })
  issuerId: number | null

  @Column({ primary: true })
  medalId: number

  @Column('text', { nullable: true })
  reason: string | null

  @Column('text', { nullable: true })
  status: string | null
}
