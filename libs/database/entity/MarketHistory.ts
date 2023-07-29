import { Column, Entity, Index } from 'typeorm'

@Index(['regionId', 'timestamp', 'typeId'], {
  unique: true
})
@Entity()
export class MarketHistory {
  @Column({ primary: true })
  typeId: number

  @Column({ primary: true })
  regionId: number

  @Column('timestamp with time zone', { primary: true })
  timestamp: Date

  @Column('numeric', { nullable: true })
  average: string | null

  @Column('timestamp with time zone', { nullable: true })
  date: Date | null

  @Column('numeric', { nullable: true })
  highest: string | null

  @Column('numeric', { nullable: true })
  lowest: string | null

  @Column('bigint', { nullable: true })
  orderCount: string | null

  @Column('bigint', { nullable: true })
  volume: string | null
}
