import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class SovereigntyStructure {
  @Column({ nullable: true })
  allianceId: number | null

  @Column({ nullable: true })
  solarSystemId: number | null

  @PrimaryColumn('bigint')
  structureId: number

  @Column({ nullable: true })
  structureTypeId: number | null

  @Column('double precision', {
    nullable: true
  })
  vulnerabilityOccupancyLevel: number | null

  @Column('timestamp with time zone', {
    nullable: true
  })
  vulnerableEndTime: Date | null

  @Column('timestamp with time zone', {
    nullable: true
  })
  vulnerableStartTime: Date | null
}
