import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CharacterMailHeader {
  @Column()
  characterId: number

  @Column({ nullable: true })
  from: number | null

  @Column('boolean', { nullable: true })
  isRead: boolean | null

  @Column('jsonb', { nullable: true })
  label: object | null

  @PrimaryColumn()
  mailId: number

  @Column('jsonb', { nullable: true })
  recipients: object | null

  @Column('text', { nullable: true })
  subject: string | null

  @Column('timestamp with time zone', { nullable: true })
  timestamp: Date | null
}
