import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CharacterNotificationContact {
  @Column()
  characterId: number

  @Column('text', { nullable: true })
  message: string | null

  @PrimaryColumn()
  notificationId: number

  @Column('timestamp with time zone', { nullable: true })
  sendDate: Date | null

  @Column({ nullable: true })
  senderCharacterId: number | null

  @Column('double precision', {
    nullable: true
  })
  standingLevel: number | null
}
