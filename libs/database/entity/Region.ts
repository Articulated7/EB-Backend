import { Column, Entity, Index, PrimaryColumn } from 'typeorm'

@Entity()
export class Region {
  @PrimaryColumn()
  regionId: number

  @Column('jsonb', { nullable: true })
  constellation: object | null

  @Column('text', { nullable: true })
  description: string | null

  @Column('text', { nullable: true })
  name: string | null
}
