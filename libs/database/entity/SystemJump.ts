import { Column, Entity, Index } from 'typeorm'

@Index(['systemId', 'timestamp'], { unique: true })
@Entity()
export class SystemJump {
  @Column()
  shipJumps: number

  @Column()
  systemId: number

  @Column('timestamp with time zone', { primary: true })
  timestamp: Date
}
