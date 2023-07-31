import { Column, Entity, Index } from 'typeorm'

@Index(['facilityId', 'corporationId'], { unique: true })
@Entity()
export class CorporationFacility {
  @Column({ primary: true })
  corporationId: number

  @Column('bigint', { primary: true })
  facilityId: string

  @Column()
  systemId: number

  @Column()
  typeId: number
}
