import { Column, Entity, Index } from 'typeorm'

@Index(['characterId', 'lastUpDated', 'observerId', 'typeId'], { unique: true })
@Entity()
export class CorporationMiningObserver {
  @Column('bigint', { primary: true })
  observerId: string

  @Column({ primary: true })
  characterId: number

  @Column('timestamp with time zone', { primary: true })
  lastUpDated: Date

  @Column('bigint', { nullable: true })
  quantity: string | null

  @Column({ nullable: true })
  recordedCorporationId: number | null

  @Column({ primary: true })
  typeId: number
}
