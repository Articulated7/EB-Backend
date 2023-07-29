import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Category {
  @PrimaryColumn()
  id: number

  @Column('jsonb')
  group: object

  @Column('text')
  name: string

  @Column()
  published: boolean
}
