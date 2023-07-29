import { Column, Entity, Index } from 'typeorm'

@Entity()
@Index(['eventId', 'characterId'], { unique: true })
export class CharacterCalendar {
  @Column({ primary: true })
  characterId: number

  @Column({ primary: true })
  eventId: number

  @Column('timestamp with time zone', { nullable: true })
  date: Date | null

  @Column({ nullable: true })
  duration: number | null

  @Column({ nullable: true })
  importance: number | null

  @Column({ nullable: true })
  ownerId: number | null

  @Column('text', { nullable: true })
  ownerName: string | null

  @Column('text', { nullable: true })
  ownerType: string | null

  @Column('text', { nullable: true })
  response: string | null

  @Column('text', { nullable: true })
  text: string | null

  @Column('text', { nullable: true })
  title: string | null
}
