import { Column, Entity, Index } from 'typeorm'

@Index(['characterId', 'startDate'], {
  unique: true
})
@Entity()
export class CorporationMemberTracking {
  @Column()
  corporationId: number

  @Column({ nullable: true })
  baseId: number | null

  @Column({ primary: true })
  characterId: number

  @Column('bigint', { nullable: true })
  locationId: string | null

  @Column('timestamp with time zone', { nullable: true })
  logoffDate: Date | null

  @Column('timestamp with time zone', { nullable: true })
  logonDate: Date | null

  @Column({ nullable: true })
  shipTypeId: number | null

  @Column('timestamp with time zone', { primary: true })
  startDate: Date
}
