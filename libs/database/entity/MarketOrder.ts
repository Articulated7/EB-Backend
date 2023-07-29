import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class MarketOrder {
  @Column({ nullable: true })
  regionId: number | null

  @Column({ nullable: true })
  duration: number | null

  @Column('boolean', { nullable: true })
  isBuyOrder: boolean | null

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
  systemId: number | null

  @Column({ nullable: true })
  typeId: number | null

  @Column({ nullable: true })
  volumeRemain: number | null

  @Column({ nullable: true })
  volumeTotal: number | null
}
