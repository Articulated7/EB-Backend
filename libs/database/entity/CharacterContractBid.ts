import { Column, Entity, Index, PrimaryColumn } from 'typeorm'

@Entity()
export class CharacterContractBid {
  @Column()
  characterId: number

  @Column()
  contractId: number

  @Column('double precision', { nullable: true })
  amount: number | null

  @PrimaryColumn()
  bidId: number | null

  @Column({ nullable: true })
  bidderId: number | null

  @Column('timestamp with time zone', { nullable: true })
  dateBid: Date | null
}
