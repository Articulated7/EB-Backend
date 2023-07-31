import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity({ name: 'type_' })
export class Type {
  @PrimaryColumn()
  id: number

  @Column('double precision')
  capacity: number

  @Column('text')
  description: string

  @Column('jsonb', { nullable: true, array: false, default: [] })
  dogmaAttributes: { attribute_id: number; value: number | bigint }[]

  @Column('jsonb', { nullable: true, array: false, default: [] })
  dogmaEffects: { effect_id: number; is_default: boolean }[]

  @Column({ nullable: true })
  graphicId: number

  @Column()
  groupId: number

  @Column({ nullable: true })
  iconId: number

  @Column({ nullable: true })
  marketGroupId: number

  @Column('double precision', { nullable: true })
  mass: number | bigint

  @Column('text')
  name: string

  @Column('double precision', { nullable: true })
  packagedVolume: number

  @Column({ nullable: true })
  portionSize: number

  @Column()
  published: boolean

  @Column('double precision', { nullable: true })
  radius: number

  @Column('double precision', { nullable: true })
  volume: number
}
