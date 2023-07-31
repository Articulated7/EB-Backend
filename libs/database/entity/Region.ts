import { Column, Entity, Index, PrimaryColumn } from 'typeorm'

@Entity()
export class Region {
  @PrimaryColumn()
  regionId: number

  @Column('jsonb', { array: true })
  constellation: number[]

  @Column('text', { nullable: true })
  description: string

  @Column('text')
  name: string
}
