import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class System {
  @PrimaryColumn()
  systemId: number

  @Column({ nullable: true })
  constellationId: number

  @Column('text', { nullable: true })
  name: string

  @Column('jsonb', { array: true, nullable: true, default: () => [] })
  planet:
    | {
        planet_id: number
        moons: number[] | undefined
        asteroid_belts: number[] | undefined
      }[]
    | null

  @Column('jsonb', { nullable: true })
  position: { x: number; y: number; z: number } | null

  @Column('text', { nullable: true })
  securityClass: string

  @Column('double precision', {
    nullable: true
  })
  securityStatus: number | null

  @Column({ nullable: true })
  starId: number

  @Column('jsonb', { array: true, nullable: true, default: () => [] })
  stargate: number[]

  @Column('jsonb', { array: true, nullable: false, default: () => [] })
  stations: number[]
}
