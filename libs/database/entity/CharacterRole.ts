import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CharacterRole {
  @PrimaryColumn()
  characterId: number

  @Column('jsonb', { nullable: true })
  roles: object | null

  @Column('jsonb', { nullable: true })
  rolesAtBase: object | null

  @Column('jsonb', { nullable: true })
  rolesAtHq: object | null

  @Column('jsonb', { nullable: true })
  rolesAtOther: object | null
}
