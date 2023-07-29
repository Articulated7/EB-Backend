import { Column, Entity, Index } from 'typeorm'

@Entity()
@Index(['allianceId', 'labelId'], { unique: true })
export class AllianceContactLabel {
  @Column('integer', { primary: true })
  allianceId: number

  @Column('bigint', { primary: true })
  labelId: string

  @Column('text')
  labelName: string
}
