import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CorporationContactLabel {
  @Column({ nullable: true })
  corporationId: number | null

  @PrimaryColumn('bigint')
  labelId: string

  @Column('text', { nullable: true })
  labelName: string | null
}
