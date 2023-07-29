import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Station {
  @PrimaryColumn()
  stationId: number

  @Column('double precision', {
    nullable: true
  })
  maxDockableShipVolume: number | null

  @Column('text', { nullable: true })
  name: string | null

  @Column('double precision', {
    nullable: true
  })
  officeRentalCost: number | null

  @Column({ nullable: true })
  owner: number | null

  @Column('jsonb', { nullable: true })
  position: object | null

  @Column({ nullable: true })
  raceId: number | null

  @Column('double precision', {
    nullable: true
  })
  reprocessingEfficiency: number | null

  @Column('double precision', {
    nullable: true
  })
  reprocessingStationsTake: number | null

  @Column('jsonb', { nullable: true })
  services: object | null

  @Column({ nullable: true })
  systemId: number | null

  @Column({ nullable: true })
  typeId: number | null
}
