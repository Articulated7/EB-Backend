import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class System {
  @PrimaryColumn()
  systemId: number

  @Column()
  constellationId: number

  @Column('text')
  name: string

  @Column('jsonb', { array: true, nullable: true, default: [] })
  planet:
    | {
        planet_id: number
        moons: number[] | undefined
        asteroid_belts: number[] | undefined
      }[]

  @Column('jsonb')
  position: { x: number; y: number; z: number }

  @Column('text', { nullable: true })
  securityClass: string

  @Column('double precision')
  securityStatus: number

  @Column({ nullable: true })
  starId: number

  @Column('jsonb', { array: true, default: [] })
  stargate: number[]

  @Column('jsonb', { array: true, default: [] })
  stations: number[]
}
