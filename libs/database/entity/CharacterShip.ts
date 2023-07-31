import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CharacterShip {
  @Column()
  characterId: number

  @PrimaryColumn('bigint')
  shipItemId: string

  @Column('text', { nullable: true })
  shipName: string | null

  @Column({ nullable: true })
  shipTypeId: number | null
}
