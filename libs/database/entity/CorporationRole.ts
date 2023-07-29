import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CorporationRole {
  @Column()
  corporationId: number

  @PrimaryColumn()
  characterId: number

  @Column('jsonb', { nullable: true })
  grantableRoles: object | null

  @Column('jsonb', { nullable: true })
  grantableRolesAtBase: object | null

  @Column('jsonb', { nullable: true })
  grantableRolesAtHq: object | null

  @Column('jsonb', { nullable: true })
  grantableRolesAtOther: object | null

  @Column('jsonb', { nullable: true })
  roles: object | null

  @Column('jsonb', { nullable: true })
  rolesAtBase: object | null

  @Column('jsonb', { nullable: true })
  rolesAtHq: object | null

  @Column('jsonb', { nullable: true })
  rolesAtOther: object | null
}
