import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CharacterImplant {
  @PrimaryColumn()
  characterId: number

  @Column('jsonb', { nullable: true })
  implants: object | null
}
