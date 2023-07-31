import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Stargate {
  @PrimaryColumn()
  stargateId: number

  @Column('jsonb')
  destination: { stargate_id: number; system_id: number }

  @Column('text')
  name: string

  @Column('jsonb')
  position: { x: number; y: number; z: number }

  @Column()
  systemId: number

  @Column()
  typeId: number
}
