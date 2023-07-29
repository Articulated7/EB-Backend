import { Column, Entity, Index } from 'typeorm'

@Index(['contractId', 'recordId'], {
  unique: true
})
@Entity()
export class CharacterContractItem {
  @Column()
  characterId: number

  @Column({ primary: true })
  contractId: number

  @Column('boolean', { nullable: true })
  isIncluded: boolean | null

  @Column('boolean', { nullable: true })
  isSingleton: boolean | null

  @Column({ nullable: true })
  quantity: number | null

  @Column({ nullable: true })
  rawQuantity: number | null

  @Column('bigint', { primary: true })
  recordId: string

  @Column({ nullable: true })
  typeId: number | null
}
