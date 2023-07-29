import { Column, Entity, Index } from 'typeorm'

@Index(['systemId', 'timestamp'], { unique: true })
@Entity()
export class SystemKill {
  @Column({ nullable: true })
  npcKills: number | null

  @Column({ nullable: true })
  podKills: number | null

  @Column({ nullable: true })
  shipKills: number | null

  @Column({ primary: true })
  systemId: number

  @Column('timestamp with time zone', { primary: true })
  timestamp: Date
}
