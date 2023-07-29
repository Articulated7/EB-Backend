import { Column, Entity, Index } from 'typeorm'

@Entity()
@Index(['eventId', 'characterId'], { unique: true })
export class CharacterCalendarAttendee {
  @Column({ primary: true })
  characterId: number

  @Column({ primary: true })
  eventId: number

  @Column('text', { nullable: true })
  eventResponse: string | null
}
