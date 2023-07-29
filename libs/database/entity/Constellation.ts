import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Constellation {
  @PrimaryColumn()
  constellationId: number

  @Column('text', { nullable: true })
  name: string | null

  @Column('jsonb', { nullable: true })
  position: object | null

  @Column({ nullable: true })
  regionId: number | null

  @Column('jsonb', { nullable: true })
  system: object | null
}
