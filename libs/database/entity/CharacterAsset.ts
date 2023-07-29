import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CharacterAsset {
  @Column()
  characterId: number

  @Column('boolean', { nullable: true })
  isBlueprintCopy: boolean | null

  @Column('boolean', { nullable: true })
  isSingleton: boolean | null

  @PrimaryColumn('bigint')
  itemId: string

  @Column('text', { nullable: true })
  locationFlag: string | null

  @Column('bigint', { nullable: true })
  locationId: string | null

  @Column('text', { nullable: true })
  locationType: string | null

  @Column({ nullable: true })
  quantity: number | null

  @Column({ nullable: true })
  typeId: number | null
}
