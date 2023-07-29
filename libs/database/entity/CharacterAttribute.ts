import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CharacterAttribute {
  @PrimaryColumn()
  characterId: number

  @Column('timestamp with time zone', {
    nullable: true
  })
  accruedRemapCooldownDate: Date | null

  @Column({ nullable: true })
  bonusRemaps: number | null

  @Column({ nullable: true })
  charisma: number | null

  @Column({ nullable: true })
  intelligence: number | null

  @Column('timestamp with time zone', { nullable: true })
  lastRemapDate: Date | null

  @Column({ nullable: true })
  memory: number | null

  @Column({ nullable: true })
  perception: number | null

  @Column({ nullable: true })
  willpower: number | null
}
