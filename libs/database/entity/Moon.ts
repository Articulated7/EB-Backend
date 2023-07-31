import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Moon {
  @PrimaryColumn()
  moonId: number

  @Column('text')
  name: string

  @Column('jsonb')
  position: { x: number; y: number; z: number }

  @Column()
  systemId: number
}
