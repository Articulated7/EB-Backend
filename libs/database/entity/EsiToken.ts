import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class EsiToken {
  @Column()
  accountId: string

  @PrimaryColumn()
  characterId: number

  @Column()
  characterName: string

  @Column()
  scopes: string

  @Column()
  tokenType: string

  @Column('timestamp with time zone', {})
  expiresOn: Date

  @Column()
  refreshToken: string
}
