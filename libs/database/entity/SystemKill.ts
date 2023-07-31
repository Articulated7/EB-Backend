import { Column, Entity, Index } from 'typeorm'

@Index(['systemId', 'timestamp'], { unique: true })
@Entity()
export class SystemKill {
  @Column()
  npcKills: number

  @Column()
  podKills: number

  @Column()
  shipKills: number

  @Column({ primary: true })
  systemId: number

  @Column('timestamp with time zone', { primary: true })
  timestamp: Date
}
