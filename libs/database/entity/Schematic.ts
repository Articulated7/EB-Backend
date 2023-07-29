import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Schematic {
  @PrimaryColumn()
  schematicId: number

  @Column({ nullable: true })
  cycleTime: number | null

  @Column('text', { nullable: true })
  schematicName: string | null
}
