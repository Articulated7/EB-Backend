import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity({ name: 'type_' })
export class Type {
  @PrimaryColumn()
  id: number

  @Column('double precision')
  capacity: number

  @Column('text')
  description: string

  @Column('jsonb', { nullable: true, array: true, default: () => [] })
  dogmaAttributes: { attribute_id: number; value: number }[]

  @Column('jsonb', { nullable: true, array: true, default: () => [] })
  dogmaEffects: { effect_id: number; is_default: boolean }[]

  @Column({ nullable: true })
  graphicId: number

  @Column()
  groupId: number

  @Column({ nullable: true })
  iconId: number

  @Column({ nullable: true })
  marketGroupId: number

  @Column({ nullable: true })
  mass: number

  @Column('text')
  name: string

  @Column('double precision', { nullable: true })
  packagedVolume: number

  @Column({ nullable: true })
  portionSize: number

  @Column()
  published: boolean

  @Column({ nullable: true })
  radius: number

  @Column({ nullable: true })
  volume: number
}
