import { Column, Entity, Index, PrimaryColumn } from 'typeorm'

@Entity()
export class CharacterOrderHistory {
  @Column()
  characterId: number

  @Column({ nullable: true })
  duration: number | null

  @Column('numeric', { nullable: true })
  escrow: string | null

  @Column('boolean', { nullable: true })
  isBuyOrder: boolean | null

  @Column('boolean', { nullable: true })
  isCorporation: boolean | null

  @Column('timestamp with time zone', { nullable: true })
  issued: Date | null

  @Column('bigint', { nullable: true })
  locationId: string | null

  @Column({ nullable: true })
  minVolume: number | null

  @PrimaryColumn('bigint')
  orderId: string

  @Column('numeric', { nullable: true })
  price: string | null

  @Column('text', { nullable: true })
  range: string | null

  @Column({ nullable: true })
  regionId: number | null

  @Column('text', { nullable: true })
  state: string | null

  @Column({ nullable: true })
  typeId: number | null

  @Column({ nullable: true })
  volumeRemain: number | null

  @Column({ nullable: true })
  volumeTotal: number | null
}
