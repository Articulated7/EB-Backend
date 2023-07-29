import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CharacterWalletTransaction {
  @Column()
  characterId: number

  @Column({ nullable: true })
  clientId: number | null

  @Column('timestamp with time zone', { nullable: true })
  date: Date | null

  @Column('boolean', { nullable: true })
  isBuy: boolean | null

  @Column('boolean', { nullable: true })
  isPersonal: boolean | null

  @Column('bigint', { nullable: true })
  journalRefId: string | null

  @Column('bigint', { nullable: true })
  locationId: string | null

  @Column({ nullable: true })
  quantity: number | null

  @PrimaryColumn('bigint')
  transactionId: string

  @Column({ nullable: true })
  typeId: number | null

  @Column('numeric', { nullable: true })
  unitPrice: string | null
}
