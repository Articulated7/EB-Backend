import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Faction {
  @Column({ nullable: true })
  corporationId: number | null

  @Column()
  description: string

  @PrimaryColumn()
  factionId: number

  @Column('boolean', {})
  isUnique: boolean

  @Column({ nullable: true })
  militiaCorporationId: number | null

  @Column()
  name: string

  @Column('double precision')
  sizeFactor: number

  @Column({ nullable: true })
  solarSystemId: number | null

  @Column()
  stationCount: number

  @Column()
  stationSystemCount: number
}
