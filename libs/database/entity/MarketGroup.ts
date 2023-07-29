import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class MarketGroup {
  @PrimaryColumn()
  marketGroupId: number

  @Column('text', { nullable: true })
  description: string | null

  @Column('text', { nullable: true })
  name: string | null

  @Column({ nullable: true })
  parentGroupId: number | null

  @Column('jsonb', { nullable: true })
  types: object | null
}
