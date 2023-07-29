import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class KillMail {
  @Column('text', { nullable: true })
  killmailHash: string | null

  @PrimaryColumn()
  killmailId: number

  @Column('jsonb', { nullable: true })
  attackers: object | null

  @Column('timestamp with time zone', { nullable: true })
  killmailTime: Date | null

  @Column({ nullable: true })
  moonId: number | null

  @Column({ nullable: true })
  solarSystemId: number | null

  @Column('jsonb', { nullable: true })
  victim: object | null

  @Column({ nullable: true })
  warId: number | null
}
