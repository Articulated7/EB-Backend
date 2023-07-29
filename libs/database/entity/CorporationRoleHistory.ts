import { Column, Entity, Index } from 'typeorm'

@Index(['changedAt', 'characterId'], {
  unique: true
})
@Entity()
export class CorporationRoleHistory {
  @Column({ nullable: true })
  corporationId: number | null

  @Column('timestamp with time zone', { primary: true })
  changedAt: Date

  @Column({ primary: true })
  characterId: number

  @Column({ nullable: true })
  issuerId: number | null

  @Column('jsonb', { nullable: true })
  newRoles: object | null

  @Column('jsonb', { nullable: true })
  oldRoles: object | null

  @Column('text', { nullable: true })
  roleType: string | null
}
