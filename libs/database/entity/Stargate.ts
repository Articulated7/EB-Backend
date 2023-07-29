import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Stargate {
  @PrimaryColumn()
  stargateId: number

  @Column('jsonb', { nullable: true })
  destination: object | null

  @Column('text', { nullable: true })
  name: string | null

  @Column('jsonb', { nullable: true })
  position: object | null

  @Column({ nullable: true })
  systemId: number | null

  @Column({ nullable: true })
  typeId: number | null
}
