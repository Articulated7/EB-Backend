import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Bloodline {
  @PrimaryColumn()
  id: number

  @Column()
  charisma: number

  @Column()
  corporationId: number

  @Column()
  description: string

  @Column()
  intelligence: number

  @Column()
  memory: number

  @Column()
  name: string

  @Column()
  perception: number

  @Column()
  raceId: number

  @Column()
  shipTypeId: number

  @Column()
  willpower: number
}
