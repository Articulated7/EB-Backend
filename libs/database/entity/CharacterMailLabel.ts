import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CharacterMailLabel {
  @PrimaryColumn()
  characterId: number

  @Column('jsonb', { nullable: true })
  label: object | null

  @Column({ nullable: true })
  totalUnreadCount: number | null
}
