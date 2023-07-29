import { Column, Entity, PrimaryColumn } from 'typeorm'


@Entity()
export class CharacterWallet {
  @PrimaryColumn()
  characterId: number

  @Column('numeric', { nullable: true })
  walletBalance: string | null
}
