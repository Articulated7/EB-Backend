import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class DogmaAttribute {
  @PrimaryColumn()
  attributeId: number

  @Column('double precision', {
    nullable: true
  })
  defaultValue: number | null

  @Column('text', { nullable: true })
  description: string | null

  @Column('text', { nullable: true })
  displayName: string | null

  @Column('boolean', { nullable: true })
  highIsGood: boolean | null

  @Column({ nullable: true })
  iconId: number | null

  @Column('text', { nullable: true })
  name: string | null

  @Column('boolean', { nullable: true })
  published: boolean | null

  @Column('boolean', { nullable: true })
  stackable: boolean | null

  @Column({ nullable: true })
  unitId: number | null
}
