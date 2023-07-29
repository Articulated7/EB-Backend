import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CharacterMail {
  @Column()
  characterId: number

  @PrimaryColumn()
  mailId: number

  @Column('text', { nullable: true })
  body: string | null

  @Column({ nullable: true })
  from: number | null

  @Column('jsonb', { nullable: true })
  label: object | null

  @Column('boolean', { nullable: true })
  read: boolean | null

  @Column('jsonb', { nullable: true })
  recipients: object | null

  @Column('text', { nullable: true })
  subject: string | null

  @Column('timestamp with time zone', { nullable: true })
  timestamp: Date | null
}
