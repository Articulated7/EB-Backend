import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Faction {
  @Column({ nullable: true })
  corporationId: number

  @Column()
  description: string

  @PrimaryColumn()
  factionId: number

  @Column('boolean')
  isUnique: boolean

  @Column({ nullable: true })
  militiaCorporationId: number

  @Column()
  name: string

  @Column('double precision')
  sizeFactor: number

  @Column({ nullable: true })
  solarSystemId: number

  @Column()
  stationCount: number

  @Column()
  stationSystemCount: number
}
