import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Station {
  @PrimaryColumn()
  stationId: number

  @Column('double precision')
  maxDockableShipVolume: number

  @Column('text')
  name: string

  @Column('double precision')
  officeRentalCost: number

  @Column({ nullable: true })
  owner: number

  @Column('jsonb')
  position: { x: number; y: number; z: number }

  @Column({ nullable: true })
  raceId: number

  @Column('double precision')
  reprocessingEfficiency: number

  @Column('double precision')
  reprocessingStationsTake: number

  @Column('jsonb', { array: true })
  services: string[]

  @Column()
  systemId: number

  @Column()
  typeId: number
}
