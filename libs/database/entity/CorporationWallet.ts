import { Column, Entity, Index } from 'typeorm'

@Index(['corporationId', 'division'], {
  unique: true
})
@Entity()
export class CorporationWallet {
  @Column({ primary: true })
  corporationId: number

  @Column('numeric', { nullable: true })
  balance: string | null

  @Column({ primary: true })
  division: number
}
