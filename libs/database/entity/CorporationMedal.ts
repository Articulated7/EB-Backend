import { Column, Entity, Index } from 'typeorm'

@Index(['corporationId', 'medalId'], { unique: true })
@Entity()
export class CorporationMedal {
  @Column({ primary: true })
  corporationId: number

  @Column('timestamp with time zone', { nullable: true })
  createdAt: Date | null

  @Column({ nullable: true })
  creatorId: number | null

  @Column('text', { nullable: true })
  description: string | null

  @Column({ primary: true })
  medalId: number

  @Column('text', { nullable: true })
  title: string | null
}
