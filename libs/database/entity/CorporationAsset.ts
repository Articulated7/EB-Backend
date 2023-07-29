import { Column, Entity, Index } from 'typeorm'

@Index(['corporationId', 'itemId'], { unique: true })
@Entity()
export class CorporationAsset {
  @Column({ primary: true })
  corporationId: number

  @Column('boolean', { nullable: true })
  isBlueprintCopy: boolean | null

  @Column('boolean', { nullable: true })
  isSingleton: boolean | null

  @Column('bigint', { primary: true })
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
