import { Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class NpcCorp {
  @PrimaryColumn()
  corporationId: number
}
