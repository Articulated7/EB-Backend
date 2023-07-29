import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Corporation {
  @PrimaryColumn()
  corporationId: number

  @Column({ nullable: true })
  allianceId: number | null

  @Column({ nullable: true })
  ceoId: number | null

  @Column({ nullable: true })
  creatorId: number | null

  @Column('timestamp with time zone', { nullable: true })
  dateFounded: Date | null

  @Column('text', { nullable: true })
  description: string | null

  @Column({ nullable: true })
  factionId: number | null

  @Column({ nullable: true })
  homeStationId: number | null

  @Column({ nullable: true })
  memberCount: number | null

  @Column('text', { nullable: true })
  name: string | null

  @Column('bigint', { nullable: true })
  shares: string | null

  @Column('double precision', {
    nullable: true
  })
  taxRate: number | null

  @Column('text', { nullable: true })
  ticker: string | null

  @Column('text', { nullable: true })
  url: string | null

  @Column('boolean', { nullable: true })
  warEligible: boolean | null
}
