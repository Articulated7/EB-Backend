import { Column, Entity, Index } from 'typeorm'

@Index(['bidId', 'contractId'], { unique: true })
@Entity()
export class ContractPublicBid {
  @Column({ primary: true })
  contractId: number

  @Column('double precision', { nullable: true })
  amount: number | null

  @Column({ primary: true })
  bidId: number

  @Column('timestamp with time zone', { nullable: true })
  dateBid: Date | null
}
