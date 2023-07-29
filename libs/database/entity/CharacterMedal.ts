import { Column, Entity, Index } from 'typeorm'

@Entity()
@Index(['characterId', 'medalId'], { unique: true })
export class CharacterMedal {
  @Column({ primary: true })
  characterId: number

  @Column({ nullable: true })
  corporationId: number | null

  @Column('timestamp with time zone', { nullable: true })
  date: Date | null

  @Column('text', { nullable: true })
  description: string | null

  @Column('jsonb', { nullable: true })
  graphic: object | null

  @Column({ nullable: true })
  issuerId: number | null

  @Column({ primary: true })
  medalId: number

  @Column('text', { nullable: true })
  reason: string | null

  @Column('text', { nullable: true })
  status: string | null

  @Column('text', { nullable: true })
  title: string | null
}
