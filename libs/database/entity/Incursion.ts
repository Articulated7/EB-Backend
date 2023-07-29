import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Incursion {
  @PrimaryColumn()
  constellationId: number

  @Column({ nullable: true })
  factionId: number | null

  @Column('boolean', { nullable: true })
  hasBoss: boolean | null

  @Column('jsonb', { nullable: true })
  infestedSolarSystem: object | null

  @Column('double precision', {
    nullable: true
  })
  influence: number | null

  @Column({ nullable: true })
  stagingSolarSystemId: number | null

  @Column('text', { nullable: true })
  state: string | null

  @Column('text', { nullable: true })
  type: string | null
}
