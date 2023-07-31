import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Planet {
  @PrimaryColumn()
  planetId: number

  @Column('text')
  name: string

  @Column('jsonb')
  position: { x: number; y: number; z: number }

  @Column()
  systemId: number

  @Column()
  typeId: number
}
