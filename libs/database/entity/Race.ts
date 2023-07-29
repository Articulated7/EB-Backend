import { Column, Entity, Index, PrimaryColumn } from 'typeorm'

@Entity()
export class Race {
  @Column({ nullable: true })
  allianceId: number | null

  @Column('text', { nullable: true })
  description: string | null

  @Column('text', { nullable: true })
  name: string | null

  @PrimaryColumn()
  raceId: number
}
