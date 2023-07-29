import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class CorporationContract {
  @Column({ nullable: true })
  corporationId: number | null

  @Column({ nullable: true })
  acceptorId: number | null

  @Column({ nullable: true })
  assigneeId: number | null

  @Column('text', { nullable: true })
  availability: string | null

  @Column('numeric', { nullable: true })
  buyout: string | null

  @Column('numeric', { nullable: true })
  collateral: string | null

  @PrimaryColumn()
  contractId: number

  @Column('timestamp with time zone', { nullable: true })
  dateAccepted: Date | null

  @Column('timestamp with time zone', { nullable: true })
  dateCompleted: Date | null

  @Column('timestamp with time zone', { nullable: true })
  dateExpired: Date | null

  @Column('timestamp with time zone', { nullable: true })
  dateIssued: Date | null

  @Column({ nullable: true })
  daysToComplete: number | null

  @Column('bigint', { nullable: true })
  endLocationId: string | null

  @Column('boolean', { nullable: true })
  forCorporation: boolean | null

  @Column({ nullable: true })
  issuerCorporationId: number | null

  @Column({ nullable: true })
  issuerId: number | null

  @Column('numeric', { nullable: true })
  price: string | null

  @Column('numeric', { nullable: true })
  reward: string | null

  @Column('bigint', { nullable: true })
  startLocationId: string | null

  @Column('text', { nullable: true })
  status: string | null

  @Column('text', { nullable: true })
  title: string | null

  @Column('text', { nullable: true })
  type: string | null

  @Column('numeric', { nullable: true })
  volume: string | null
}
