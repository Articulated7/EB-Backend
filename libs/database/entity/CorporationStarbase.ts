import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CorporationStarbase {
  @Column({ nullable: true })
  corporationId: number | null

  @PrimaryColumn('bigint')
  starbaseId: string

  @Column('boolean', { nullable: true })
  allowAllianceMembers: boolean | null

  @Column('boolean', { nullable: true })
  allowCorporationMembers: boolean | null

  @Column('text', { nullable: true })
  anchor: string | null

  @Column('boolean', { nullable: true })
  attackIfAtWar: boolean | null

  @Column('boolean', {
    nullable: true
  })
  attackIfOtherSecurityStatusDropping: boolean | null

  @Column('double precision', {
    nullable: true
  })
  attackSecurityStatusThreshold: number | null

  @Column('double precision', {
    nullable: true
  })
  attackStandingThreshold: number | null

  @Column('text', { nullable: true })
  fuelBayTake: string | null

  @Column('text', { nullable: true })
  fuelBayView: string | null

  @Column('jsonb', { nullable: true })
  fuels: object | null

  @Column('text', { nullable: true })
  offline: string | null

  @Column('text', { nullable: true })
  online: string | null

  @Column('text', { nullable: true })
  unanchor: string | null

  @Column('boolean', { nullable: true })
  useAlliancetandings: boolean | null
}
