import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class MarketStructure {
  @PrimaryColumn('bigint')
  structureId: string

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

  @Column('bigint', { nullable: true })
  orderId: string | null

  @Column('numeric', { nullable: true })
  price: string | null

  @Column('text', { nullable: true })
  range: string | null

  @Column({ nullable: true })
  typeId: number | null

  @Column({ nullable: true })
  volumeRemain: number | null

  @Column({ nullable: true })
  volumeTotal: number | null
}
