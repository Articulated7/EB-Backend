import { Column, Entity, Index, PrimaryColumn } from 'typeorm'

@Entity()
export class OpportunityTask {
  @PrimaryColumn()
  taskId: number

  @Column('text', { nullable: true })
  description: string | null

  @Column('text', { nullable: true })
  name: string | null

  @Column('text', { nullable: true })
  notification: string | null
}
