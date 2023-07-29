import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class SovereigntyMap {
  @Column({ nullable: true })
  allianceId: number | null

  @Column({ nullable: true })
  corporationId: number | null

  @Column({ nullable: true })
  factionId: number | null

  @PrimaryColumn()
  systemId: number
}
