import { Column, Entity, Index } from 'typeorm'

@Entity()
@Index(['characterId', 'eventId'], {
  unique: true
})
export class CharacterCalendarHeader {
  @Column({ primary: true })
  characterId: number

  @Column('timestamp with time zone', { nullable: true })
  eventDate: Date | null

  @Column({ primary: true })
  eventId: number

  @Column('text', { nullable: true })
  eventResponse: string | null

  @Column({ nullable: true })
  importance: number | null

  @Column('text', { nullable: true })
  title: string | null
}
