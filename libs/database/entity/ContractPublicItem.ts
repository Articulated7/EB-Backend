import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class ContractPublicItem {
  @Column({ nullable: true })
  contractId: number | null

  @Column('boolean', { nullable: true })
  isBlueprintCopy: boolean | null

  @Column('boolean', { nullable: true })
  isIncluded: boolean | null

  @Column('bigint', { nullable: true })
  itemId: string | null

  @Column({ nullable: true })
  materialEfficiency: number | null

  @Column({ nullable: true })
  quantity: number | null

  @PrimaryColumn('bigint')
  recordId: string

  @Column({ nullable: true })
  runs: number | null

  @Column({ nullable: true })
  timeEfficiency: number | null

  @Column({ nullable: true })
  typeId: number | null
}
