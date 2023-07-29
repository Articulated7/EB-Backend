import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CharacterWalletJournal {
  @Column()
  characterId: number

  @Column('numeric', { nullable: true })
  amount: string | null

  @Column('numeric', { nullable: true })
  balance: string | null

  @Column('bigint', { nullable: true })
  contextId: string | null

  @Column('text', { nullable: true })
  contextIdType: string | null

  @Column('timestamp with time zone', { nullable: true })
  date: Date | null

  @Column('text', { nullable: true })
  description: string | null

  @Column({ nullable: true })
  firstPartyId: number | null

  @PrimaryColumn('bigint')
  id: string

  @Column('text', { nullable: true })
  reason: string | null

  @Column('text', { nullable: true })
  refType: string | null

  @Column({ nullable: true })
  secondPartyId: number | null

  @Column('numeric', { nullable: true })
  tax: string | null

  @Column({ nullable: true })
  taxReceiverId: number | null
}
