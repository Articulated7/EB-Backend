import { Column, Entity, Index } from 'typeorm'

@Index(['timestamp', 'typeId'], { unique: true })
@Entity()
export class MarketPrice {
  @Column('numeric', { nullable: true })
  adjustedPrice: string | null

  @Column('numeric', { nullable: true })
  averagePrice: string | null

  @Column({ primary: true })
  typeId: number

  @Column('timestamp with time zone', { primary: true })
  timestamp: Date
}
