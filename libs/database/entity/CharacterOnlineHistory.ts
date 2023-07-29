import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CharacterOnlineHistory {
  @PrimaryColumn({ primary: true })
  characterId: number

  @Column('timestamp with time zone', { nullable: true })
  lastLogin: Date | null

  @Column('timestamp with time zone', { nullable: true })
  lastLogout: Date | null

  @Column({ nullable: true })
  logins: number | null

  @Column('boolean', { nullable: true })
  online: boolean | null
}
