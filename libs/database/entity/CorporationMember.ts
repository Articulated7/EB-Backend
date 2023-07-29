import { Column, Entity, Index, PrimaryColumn } from 'typeorm'

@Entity()
export class CorporationMember {
  @PrimaryColumn()
  corporationId: number

  @Column('jsonb', { nullable: true })
  members: object | null
}
