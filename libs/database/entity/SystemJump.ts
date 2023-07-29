import { Column, Entity, Index } from 'typeorm'

@Index(['systemId', 'timestamp'], { unique: true })
@Entity()
export class SystemJump {
  @Column({ nullable: true })
  shipJumps: number | null

  @Column({ primary: true })
  systemId: number

  @Column('timestamp with time zone', { primary: true })
  timestamp: Date
}
