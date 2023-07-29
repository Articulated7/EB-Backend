import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CorporationOrder {
  @Column()
  corporationId: number

  @Column({ nullable: true })
  duration: number | null

  @Column('numeric', { nullable: true })
  escrow: string | null

  @Column('boolean', { nullable: true })
  isBuyOrder: boolean | null

  @Column('timestamp with time zone', { nullable: true })
  issued: Date | null

  @Column({ nullable: true })
  issuedBy: number | null

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

  @Column({ nullable: true })
  typeId: number | null

  @Column({ nullable: true })
  volumeRemain: number | null

  @Column({ nullable: true })
  volumeTotal: number | null

  @Column({ nullable: true })
  walletDivision: number | null
}
