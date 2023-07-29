import { Column, Entity, Index } from 'typeorm'

@Index(['corporationId', 'offerId'], { unique: true })
@Entity()
export class LoyaltyStoreOffer {
  @Column({ primary: true })
  corporationId: number

  @Column({ nullable: true })
  akCost: number | null

  @Column('bigint', { nullable: true })
  iskCost: string | null

  @Column({ nullable: true })
  lpCost: number | null

  @Column({ primary: true })
  offerId: number

  @Column({ nullable: true })
  quantity: number | null

  @Column('jsonb', { nullable: true })
  requiredItems: object | null

  @Column({ nullable: true })
  typeId: number | null
}
