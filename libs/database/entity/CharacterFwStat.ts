import { Column, Entity, Index, PrimaryColumn } from 'typeorm'

@Entity()
export class CharacterFwStat {
  @PrimaryColumn()
  characterId: number

  @Column({ nullable: true })
  currentRank: number | null

  @Column('timestamp with time zone', { nullable: true })
  enlistedOn: Date | null

  @Column({ nullable: true })
  factionId: number | null

  @Column({ nullable: true })
  highestRank: number | null

  @Column('jsonb', { nullable: true })
  kills: object | null

  @Column('jsonb', { nullable: true })
  victoryPoints: object | null
}
