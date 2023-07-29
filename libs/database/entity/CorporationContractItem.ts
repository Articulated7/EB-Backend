import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CorporationContractItem {
  @Column()
  contractId: number

  @Column('boolean', { nullable: true })
  isIncluded: boolean | null

  @Column('boolean', { nullable: true })
  isSingleton: boolean | null

  @Column({ nullable: true })
  quantity: number | null

  @Column({ nullable: true })
  rawQuantity: number | null

  @PrimaryColumn('bigint')
  recordId: string

  @Column({ nullable: true })
  typeId: number | null
}
