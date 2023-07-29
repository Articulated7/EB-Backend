import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CharacterNotification {
  @Column()
  characterId: number

  @Column('boolean', { nullable: true })
  isRead: boolean | null

  @PrimaryColumn('bigint')
  notificationId: string

  @Column({ nullable: true })
  senderId: number | null

  @Column('text', { nullable: true })
  senderType: string | null

  @Column('text', { nullable: true })
  text: string | null

  @Column('timestamp with time zone', { nullable: true })
  timestamp: Date | null

  @Column('text', { nullable: true })
  type: string | null
}
