import { Column, Entity, Index } from 'typeorm'

@Index(['characterId', 'corporationId'], {
  unique: true
})
@Entity()
export class CorporationMemberTitle {
  @Column({ primary: true })
  corporationId: number

  @Column({ primary: true })
  characterId: number

  @Column('jsonb', { nullable: true })
  title: object | null
}
