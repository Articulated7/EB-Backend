import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class DogmaEffect {
  @PrimaryColumn()
  effectId: number

  @Column('text', { nullable: true })
  description: string | null

  @Column('boolean', { nullable: true })
  disallowAutoRepeat: boolean | null

  @Column({ nullable: true })
  dischargeAttributeId: number | null

  @Column('text', { nullable: true })
  displayName: string | null

  @Column({ nullable: true })
  durationAttributeId: number | null

  @Column({ nullable: true })
  effectCategory: number | null

  @Column('boolean', { nullable: true })
  electronicChance: boolean | null

  @Column({ nullable: true })
  falloffAttributeId: number | null

  @Column({ nullable: true })
  iconId: number | null

  @Column('boolean', { nullable: true })
  isAssistance: boolean | null

  @Column('boolean', { nullable: true })
  isOffensive: boolean | null

  @Column('boolean', { nullable: true })
  isWarpSafe: boolean | null

  @Column('jsonb', { nullable: true })
  modifiers: object | null

  @Column('text', { nullable: true })
  name: string | null

  @Column({ nullable: true })
  postExpression: number | null

  @Column({ nullable: true })
  preExpression: number | null

  @Column('boolean', { nullable: true })
  published: boolean | null

  @Column({ nullable: true })
  rangeAttributeId: number | null

  @Column('boolean', { nullable: true })
  rangeChance: boolean | null

  @Column({ nullable: true })
  trackingSpeedAttributeId: number | null
}
