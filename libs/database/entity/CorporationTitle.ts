import { Column, Entity, Index } from 'typeorm'

@Index(['corporationId', 'titleId'], { unique: true })
@Entity()
export class CorporationTitle {
  @Column({ primary: true })
  corporationId: number

  @Column('jsonb', { nullable: true })
  grantableRoles: object | null

  @Column('jsonb', { nullable: true })
  grantableRolesAtBase: object | null

  @Column('jsonb', { nullable: true })
  grantableRolesAtHq: object | null

  @Column('jsonb', { nullable: true })
  grantableRolesAtOther: object | null

  @Column('text', { nullable: true })
  name: string | null

  @Column('jsonb', { nullable: true })
  roles: object | null

  @Column('jsonb', { nullable: true })
  rolesAtBase: object | null

  @Column('jsonb', { nullable: true })
  rolesAtHq: object | null

  @Column('jsonb', { nullable: true })
  rolesAtOther: object | null

  @Column({ primary: true })
  titleId: number
}
