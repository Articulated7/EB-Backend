import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CorporationFwStat {
  @PrimaryColumn()
  corporationId: number

  @Column('timestamp with time zone', { nullable: true })
  enlistedOn: Date | null

  @Column({ nullable: true })
  factionId: number | null

  @Column('jsonb', { nullable: true })
  kills: object | null

  @Column({ nullable: true })
  pilots: number | null

  @Column('jsonb', { nullable: true })
  victoryPoints: object | null
}
