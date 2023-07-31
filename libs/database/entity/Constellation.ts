import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Constellation {
  @PrimaryColumn()
  constellationId: number

  @Column('text')
  name: string | null

  @Column('jsonb')
  position: { x: number; y: number; z: number }

  @Column()
  regionId: number

  @Column('jsonb', { array: true })
  system: number[]
}
