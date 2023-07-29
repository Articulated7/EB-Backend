import { Column, Entity, Index } from 'typeorm'

@Index(['corporationId', 'itemId'], {
  unique: true
})
@Entity()
export class CorporationBlueprint {
  @Column({ primary: true })
  corporationId: number

  @Column('bigint', { primary: true })
  itemId: string

  @Column('text', { nullable: true })
  locationFlag: string | null

  @Column('bigint', { nullable: true })
  locationId: string | null

  @Column({ nullable: true })
  materialEfficiency: number | null

  @Column({ nullable: true })
  quantity: number | null

  @Column({ nullable: true })
  runs: number | null

  @Column({ nullable: true })
  timeEfficiency: number | null

  @Column({ nullable: true })
  typeId: number | null
}
