import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity({ name: 'type_' })
export class Type {
  @PrimaryColumn()
  id: number

  @Column('double precision')
  capacity: number

  @Column('text')
  description: string

  @Column('jsonb', { nullable: true })
  dogmaAttributes: object | null

  @Column('jsonb', { nullable: true })
  dogmaEffects: object | null

  @Column({ nullable: true })
  graphicId: number | null

  @Column()
  groupId: number

  @Column({ nullable: true })
  iconId: number | null

  @Column({ nullable: true })
  marketGroupId: number | null

  @Column({ nullable: true })
  mass: number | null

  @Column('text')
  name: string

  @Column('double precision')
  packagedVolume: number | null

  @Column({ nullable: true })
  portionSize: number | null

  @Column()
  published: boolean

  @Column({ nullable: true })
  radius: number | null

  @Column({ nullable: true })
  volume: number | null
}
