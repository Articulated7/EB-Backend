import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Structure {
  @PrimaryColumn('bigint')
  structureId: string

  @Column('text', { nullable: true })
  name: string | null

  @Column({ nullable: true })
  ownerId: number | null

  @Column('jsonb', { nullable: true })
  position: object | null

  @Column({ nullable: true })
  solarSystemId: number | null

  @Column({ nullable: true })
  typeId: number | null
}
