import { Column, Entity, Index } from 'typeorm'

@Entity()
@Index(['characterId', 'corporationId'], {
  unique: true
})
export class CharacterLoyaltyPoint {
  @Column({ primary: true })
  characterId: number

  @Column({ primary: true })
  corporationId: number

  @Column({ nullable: true })
  loyaltyPoints: number | null
}
