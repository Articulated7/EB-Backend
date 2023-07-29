import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class System {
  @PrimaryColumn()
  systemId: number

  @Column({ nullable: true })
  constellationId: number | null

  @Column('text', { nullable: true })
  name: string | null

  @Column('jsonb', { nullable: true })
  planet: object | null

  @Column('jsonb', { nullable: true })
  position: object | null

  @Column('text', { nullable: true })
  securityClass: string | null

  @Column('double precision', {
    nullable: true
  })
  securityStatus: number | null

  @Column({ nullable: true })
  starId: number | null

  @Column('jsonb', { nullable: true })
  stargate: object | null

  @Column('jsonb', { nullable: true })
  stations: object | null
}
