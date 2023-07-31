import { Column, Entity, Index, PrimaryColumn } from 'typeorm'

@Entity()
export class CorporationStructure {
  @Column({ nullable: true })
  corporationId: number | null

  @Column('timestamp with time zone', { nullable: true })
  fuelExpires: Date | null

  @Column('text', { nullable: true })
  name: string | null

  @Column('timestamp with time zone', {
    nullable: true
  })
  nextReinforceApply: Date | null

  @Column({ nullable: true })
  nextReinforceHour: number | null

  @Column({ nullable: true })
  profileId: number | null

  @Column({ nullable: true })
  reinforceHour: number | null

  @Column('jsonb', { nullable: true })
  services: object | null

  @Column('text', { nullable: true })
  state: string | null

  @Column('timestamp with time zone', { nullable: true })
  stateTimerEnd: Date | null

  @Column('timestamp with time zone', {
    nullable: true
  })
  stateTimerStart: Date | null

  @PrimaryColumn('bigint')
  structureId: string

  @Column({ nullable: true })
  systemId: number | null

  @Column({ nullable: true })
  typeId: number | null

  @Column('timestamp with time zone', { nullable: true })
  unanchorsAt: Date | null
}
