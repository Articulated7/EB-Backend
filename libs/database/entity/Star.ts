import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Star {
  @PrimaryColumn()
  starId: number

  @Column('bigint')
  age: number

  @Column('double precision')
  luminosity: number

  @Column('text')
  name: string

  @Column('bigint')
  radius: number

  @Column()
  solarSystemId: number

  @Column('text')
  spectralClass: string

  @Column()
  temperature: number

  @Column()
  typeId: number
}
