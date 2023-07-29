import { Column, Entity, PrimaryColumn } from 'typeorm'


@Entity()
export class CharacterSkill {
  @PrimaryColumn()
  characterId: number

  @Column('jsonb', { nullable: true })
  skills: object | null

  @Column('bigint', { nullable: true })
  totalSp: string | null

  @Column({ nullable: true })
  unallocatedSp: number | null
}
