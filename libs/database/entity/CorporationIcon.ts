import { Column, Entity, Index, PrimaryColumn } from 'typeorm'

@Entity()
export class CorporationIcon {
  @PrimaryColumn()
  corporationId: number

  @Column('text', { nullable: true })
  px128x128: string | null

  @Column('text', { nullable: true })
  px256x256: string | null

  @Column('text', { nullable: true })
  px64x64: string | null
}
