import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class SyncStatus {
  @PrimaryColumn()
  name: string

  @Column()
  interval: number

  @Column('timestamp with time zone')
  lastSync: Date

  @Column('timestamp with time zone')
  nextSync: Date
}
