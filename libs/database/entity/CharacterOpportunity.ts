import { Column, Entity, Index } from 'typeorm'

@Entity()
@Index(['characterId', 'taskId'], { unique: true })
export class CharacterOpportunity {
  @Column({ primary: true })
  characterId: number

  @Column('timestamp with time zone', { nullable: true })
  completedAt: Date | null

  @Column({ primary: true })
  taskId: number
}
