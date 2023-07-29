import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Star {
  @PrimaryColumn()
  starId: number

  @Column('bigint', { nullable: true })
  age: string | null

  @Column('double precision', {
    nullable: true
  })
  luminosity: number | null

  @Column('text', { nullable: true })
  name: string | null

  @Column('bigint', { nullable: true })
  radius: string | null

  @Column({ nullable: true })
  solarSystemId: number | null

  @Column('text', { nullable: true })
  spectralClass: string | null

  @Column({ nullable: true })
  temperature: number | null

  @Column({ nullable: true })
  typeId: number | null
}
