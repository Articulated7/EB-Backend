import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Ancestry {
  @PrimaryColumn()
  id: number

  @Column('integer')
  bloodlineId: number

  @Column('text')
  description: string

  @Column({ nullable: true })
  iconId: number

  @Column('text')
  name: string

  @Column('text', { nullable: true })
  shortDescription: string
}
