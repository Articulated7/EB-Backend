import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class IndustryFacility {
  @PrimaryColumn('bigint')
  facilityId: string

  @Column({ nullable: true })
  ownerId: number | null

  @Column({ nullable: true })
  regionId: number | null

  @Column({ nullable: true })
  solarSystemId: number | null

  @Column('double precision', { nullable: true })
  tax: number | null

  @Column({ nullable: true })
  typeId: number | null
}
