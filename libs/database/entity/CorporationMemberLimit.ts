import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CorporationMemberLimit {
  @PrimaryColumn()
  corporationId: number

  @Column({ nullable: true })
  memberLimit: number | null
}
