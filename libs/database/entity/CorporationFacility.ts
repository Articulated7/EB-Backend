import { Column, Entity, Index } from 'typeorm'

@Index(['facilityId', 'corporationId'], { unique: true })
@Entity()
export class CorporationFacility {
  @Column({ nullable: true, primary: true })
  corporationId: number | null

  @Column('bigint', { primary: true })
  facilityId: string

  @Column({ nullable: true })
  systemId: number | null

  @Column({ nullable: true })
  typeId: number | null
}
