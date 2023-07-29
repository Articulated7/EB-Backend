import { Column, Entity, Index, PrimaryColumn } from 'typeorm'

@Entity()
export class AsteroidBelt {
  @PrimaryColumn()
  asteroIdBeltId: number

  @Column('text', { nullable: true })
  name: string | null

  @Column('jsonb', { nullable: true })
  position: object | null

  @Column('integer', { nullable: true })
  systemId: number | null
}
