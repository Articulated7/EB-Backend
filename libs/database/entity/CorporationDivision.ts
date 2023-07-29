import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CorporationDivision {
  @PrimaryColumn()
  corporationId: number

  @Column('jsonb', { nullable: true })
  hangar: object | null

  @Column('jsonb', { nullable: true })
  wallet: object | null
}
