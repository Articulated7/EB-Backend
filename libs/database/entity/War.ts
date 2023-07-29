import { Column, Entity, Index, PrimaryColumn } from 'typeorm'

@Entity()
export class War {
  @Column('jsonb', { nullable: true })
  aggressor: object | null

  @Column('jsonb', { nullable: true })
  ally: object | null

  @Column('timestamp with time zone', { nullable: true })
  declared: Date | null

  @Column('jsonb', { nullable: true })
  defender: object | null

  @Column('timestamp with time zone', { nullable: true })
  finished: Date | null

  @PrimaryColumn()
  id: number

  @Column('boolean', { nullable: true })
  mutual: boolean | null

  @Column('boolean', { nullable: true })
  openForAlly: boolean | null

  @Column('timestamp with time zone', { nullable: true })
  retracted: Date | null

  @Column('timestamp with time zone', { nullable: true })
  started: Date | null
}
