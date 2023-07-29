import { Column, Entity, Index, PrimaryColumn } from 'typeorm'

@Entity()
export class CorporationContractBid {
  @Column()
  contractId: number

  @Column('double precision', { nullable: true })
  amount: number | null

  @Column({ nullable: true })
  bidId: number | null

  @PrimaryColumn()
  bidderId: number

  @Column('timestamp with time zone', { nullable: true })
  dateBid: Date | null
}
