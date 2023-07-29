import { Column, Entity, Index } from 'typeorm'

@Index(['characterId', 'planetId'], {
  unique: true
})
@Entity()
export class CharacterPlanetLayout {
  @Column({ primary: true })
  characterId: number

  @Column({ primary: true })
  planetId: number

  @Column('jsonb', { nullable: true })
  links: object | null

  @Column('jsonb', { nullable: true })
  pins: object | null

  @Column('jsonb', { nullable: true })
  routes: object | null
}
