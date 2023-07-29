import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class AllianceIcon {
  @PrimaryColumn()
  allianceId: number

  @Column('text', { nullable: true })
  px128x128: string | null

  @Column('text', { nullable: true })
  px64x64: string | null
}
