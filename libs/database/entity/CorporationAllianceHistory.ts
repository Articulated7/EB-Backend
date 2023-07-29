import { Column, Entity, Index } from 'typeorm'

@Index(['corporationId', 'recordId'], {
  unique: true
})
@Entity()
export class CorporationAllianceHistory {
  @Column({ primary: true })
  corporationId: number

  @Column({ nullable: true })
  allianceId: number | null

  @Column('boolean', { nullable: true })
  isDeleted: boolean | null

  @Column({ primary: true })
  recordId: number

  @Column('timestamp with time zone', { nullable: true })
  startDate: Date | null
}
