import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity()
export class Status {
  @PrimaryColumn()
  timestamp: Date

  @Column()
  players: number

  @Column()
  serverVersion: number

  @Column()
  startTime: Date

  @Column({ default: false })
  vip: boolean
}
