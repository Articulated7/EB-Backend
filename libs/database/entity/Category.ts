import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Category {
  @PrimaryColumn()
  id: number

  @Column('jsonb', { array: true })
  group: number[]

  @Column('text')
  name: string

  @Column()
  published: boolean
}
