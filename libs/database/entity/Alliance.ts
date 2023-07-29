import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Alliance {
  @PrimaryColumn()
  id: number

  @Column()
  creatorCorporationId: number

  @Column()
  creatorId: number

  @Column('timestamp with time zone')
  dateFounded: Date

  @Column()
  executorCorporationId: number

  @Column({ nullable: true })
  factionId: number | null

  @Column('text')
  name: string

  @Column('text')
  ticker: string
}
