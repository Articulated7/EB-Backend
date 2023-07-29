import { Column, Entity, Index } from 'typeorm'

@Entity()
@Index(['allianceId', 'contactId'], { unique: true })
export class AllianceContact {
  @Column('integer', { primary: true })
  allianceId: number

  @Column('integer', { primary: true })
  contactId: number

  @Column('text', { nullable: true })
  contactType: string | null

  @Column('jsonb', { nullable: true })
  labelIds: object | null

  @Column('double precision', {
    name: 'Standing',
    nullable: true
  })
  standing: number | null
}
