import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class SovereigntyCampaign {
  @Column('double precision', {
    nullable: true
  })
  attackersScore: number | null

  @PrimaryColumn()
  campaignId: number

  @Column({ nullable: true })
  constellationId: number | null

  @Column({ nullable: true })
  defenderId: number | null

  @Column('double precision', {
    nullable: true
  })
  defenderScore: number | null

  @Column('text', { nullable: true })
  eventType: string | null

  @Column('jsonb', { nullable: true })
  participants: object | null

  @Column({ nullable: true })
  solarSystemId: number | null

  @Column('timestamp with time zone', { nullable: true })
  startTime: Date | null

  @Column('bigint', { nullable: true })
  structureId: string | null
}
