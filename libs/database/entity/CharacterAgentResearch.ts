import { Column, Entity, Index } from 'typeorm'

@Entity()
@Index(['agentId', 'characterId'], { unique: true })
export class CharacterAgentResearch {
  @Column({ primary: true })
  characterId: number

  @Column({ primary: true })
  agentId: number

  @Column('double precision', {
    nullable: true
  })
  pointsPerDay: number | null

  @Column('double precision', {
    nullable: true
  })
  remainderPoints: number | null

  @Column({ nullable: true })
  skillTypeId: number | null

  @Column('timestamp with time zone', { nullable: true })
  startedAt: Date | null
}
