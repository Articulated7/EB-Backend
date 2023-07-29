import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class IndustrySystem {
  @Column('jsonb', { nullable: true })
  costIndices: object | null

  @PrimaryColumn()
  solarSystemId: number
}
