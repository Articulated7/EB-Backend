import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Character {
  @PrimaryColumn()
  id: number

  @Column({ nullable: true })
  allianceId: number | null

  @Column('timestamp with time zone', { nullable: true })
  birthday: Date | null

  @Column({ nullable: true })
  bloodlineId: number | null

  @Column({ nullable: true })
  corporationId: number | null

  @Column('text', { nullable: true })
  description: string | null

  @Column({ nullable: true })
  factionId: number | null

  @Column('text', { nullable: true })
  gender: string | null

  @Column('text', { nullable: true })
  name: string | null

  @Column({ nullable: true })
  raceId: number | null

  @Column('double precision', {
    nullable: true
  })
  securityStatus: number | null

  @Column('text', { nullable: true })
  title: string | null
}
