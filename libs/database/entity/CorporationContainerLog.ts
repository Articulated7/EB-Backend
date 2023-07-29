import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CorporationContainerLog {
  @Column({ nullable: true })
  corporationId: number | null

  @Column('text', { nullable: true })
  action: string | null

  @Column({ nullable: true })
  characterId: number | null

  @PrimaryColumn('bigint')
  containerId: string

  @Column({ nullable: true })
  containerTypeId: number | null

  @Column('text', { nullable: true })
  locationFlag: string | null

  @Column('bigint', { nullable: true })
  locationId: string | null

  @Column('timestamp with time zone', { nullable: true })
  loggedAt: Date | null

  @Column({ nullable: true })
  newConfigBitmask: number | null

  @Column({ nullable: true })
  oldConfigBitmask: number | null

  @Column('text', { nullable: true })
  passwordType: string | null

  @Column({ nullable: true })
  quantity: number | null

  @Column({ nullable: true })
  typeId: number | null
}
