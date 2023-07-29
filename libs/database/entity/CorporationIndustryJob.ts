import { Column, Entity, Index, PrimaryColumn } from 'typeorm'

@Entity()
export class CorporationIndustryJob {
  @Column()
  corporationId: number

  @Column({ nullable: true })
  activityId: number | null

  @Column('bigint', { nullable: true })
  blueprintId: string | null

  @Column('bigint', { nullable: true })
  blueprintLocationId: string | null

  @Column({ nullable: true })
  blueprintTypeId: number | null

  @Column({ nullable: true })
  completedCharacterId: number | null

  @Column('timestamp with time zone', { nullable: true })
  completedDate: Date | null

  @Column('numeric', { nullable: true })
  cost: string | null

  @Column({ nullable: true })
  duration: number | null

  @Column('timestamp with time zone', { nullable: true })
  endDate: Date | null

  @Column('bigint', { nullable: true })
  facilityId: string | null

  @Column({ nullable: true })
  installerId: number | null

  @PrimaryColumn()
  joBid: number

  @Column({ nullable: true })
  licensedRuns: number | null

  @Column('bigint', { nullable: true })
  locationId: string | null

  @Column('bigint', { nullable: true })
  outputLocationId: string | null

  @Column('timestamp with time zone', { nullable: true })
  pauseDate: Date | null

  @Column('double precision', {
    nullable: true
  })
  probability: number | null

  @Column({ nullable: true })
  productTypeId: number | null

  @Column({ nullable: true })
  runs: number | null

  @Column('timestamp with time zone', { nullable: true })
  startDate: Date | null

  @Column('text', { nullable: true })
  status: string | null

  @Column({ nullable: true })
  successfulRuns: number | null
}
