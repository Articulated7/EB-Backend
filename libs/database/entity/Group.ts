import { Column, Entity, Index, PrimaryColumn } from 'typeorm'

@Entity()
export class Group {
  @PrimaryColumn()
  groupId: number

  @Column()
  categoryId: number

  @Column()
  name: string

  @Column('boolean', {})
  published: boolean

  @Column('jsonb', {})
  types: object
}
