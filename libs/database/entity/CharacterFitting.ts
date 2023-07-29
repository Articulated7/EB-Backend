import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CharacterFitting {
  @Column()
  characterId: number

  @Column('text', { nullable: true })
  description: string | null

  @PrimaryColumn()
  fittingId: number

  @Column('jsonb', { nullable: true })
  items: object | null

  @Column('text', { nullable: true })
  name: string | null

  @Column({ nullable: true })
  shipTypeId: number | null
}
