import { Column, Entity, Index } from 'typeorm'

@Entity()
@Index(['characterId', 'planetId'], { unique: true })
export class CharacterPlanet {
  @Column({ primary: true })
  characterId: number

  @Column('timestamp with time zone', { nullable: true })
  lastUpDate: Date | null

  @Column({ nullable: true })
  numPins: number | null

  @Column({ nullable: true })
  ownerId: number | null

  @Column({ primary: true })
  planetId: number

  @Column('text', { nullable: true })
  planetType: string | null

  @Column({ nullable: true })
  solarSystemId: number | null

  @Column({ nullable: true })
  upgradeLevel: number | null
}
