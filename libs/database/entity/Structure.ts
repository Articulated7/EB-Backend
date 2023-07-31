import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Structure {
  @PrimaryColumn('bigint')
  structureId: string

  @Column('text')
  name: string

  @Column()
  ownerId: number

  @Column('jsonb')
  position: { x: number; y: number; z: number }

  @Column()
  solarSystemId: number

  @Column({ nullable: true })
  typeId: number
}
