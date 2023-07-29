import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class OpportunityGroup {
  @PrimaryColumn()
  groupId: number

  @Column('jsonb', { nullable: true })
  connectedGroup: object | null

  @Column('text', { nullable: true })
  description: string | null

  @Column('text', { nullable: true })
  name: string | null

  @Column('text', { nullable: true })
  notification: string | null

  @Column('jsonb', { nullable: true })
  requiredTasks: object | null
}
