import { Column, Entity, Index } from 'typeorm'

@Index(['corporationId', 'fromId'], {
  unique: true
})
@Entity()
export class CorporationStanding {
  @Column({ primary: true })
  corporationId: number

  @Column({ primary: true })
  fromId: number

  @Column('text', { nullable: true })
  fromType: string | null

  @Column('double precision', {
    nullable: true
  })
  standing: number | null
}
