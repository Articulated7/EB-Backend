import { Column, Entity, Index, PrimaryColumn } from 'typeorm'

@Entity()
export class Race {
  @Column()
  allianceId: number

  @Column('text')
  description: string

  @Column('text')
  name: string

  @PrimaryColumn()
  raceId: number
}
