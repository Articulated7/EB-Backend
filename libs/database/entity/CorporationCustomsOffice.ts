import { Column, Entity, Index, PrimaryColumn } from 'typeorm'

@Entity()
export class CorporationCustomsOffice {
  @Column({ nullable: true })
  corporationId: number | null

  @Column('double precision', {
    nullable: true
  })
  allianceTaxRate: number | null

  @Column('boolean', { nullable: true })
  allowAccessWithStandings: boolean | null

  @Column('boolean', { nullable: true })
  allowAllianceAccess: boolean | null

  @Column('double precision', {
    nullable: true
  })
  badStandingTaxRate: number | null

  @Column('double precision', {
    nullable: true
  })
  corporationTaxRate: number | null

  @Column('double precision', {
    nullable: true
  })
  excellentStandingTaxRate: number | null

  @Column('double precision', {
    nullable: true
  })
  goodStandingTaxRate: number | null

  @Column('double precision', {
    nullable: true
  })
  neutralStandingTaxRate: number | null

  @PrimaryColumn('bigint')
  officeId: string

  @Column({ nullable: true })
  reinforceExitEnd: number | null

  @Column({ nullable: true })
  reinforceExitStart: number | null

  @Column('text', { nullable: true })
  standingLevel: string | null

  @Column({ nullable: true })
  systemId: number | null

  @Column('double precision', {
    nullable: true
  })
  terribleStandingTaxRate: number | null
}
