import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Planet {
  @PrimaryColumn()
  planetId: number

  @Column('text', { nullable: true })
  name: string | null

  @Column('jsonb', { nullable: true })
  position: object | null

  @Column({ nullable: true })
  systemId: number | null

  @Column({ nullable: true })
  typeId: number | null
}
