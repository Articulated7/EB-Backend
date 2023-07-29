import { Column, Entity, Index } from 'typeorm'

@Index(['characterId', 'skillId'], { unique: true })
@Entity()
export class CharacterSkillQueue {
  @Column({ primary: true })
  characterId: number

  @Column('timestamp with time zone', { nullable: true })
  finishDate: Date | null

  @Column({ nullable: true })
  finishedLevel: number | null

  @Column({ nullable: true })
  levelEndSp: number | null

  @Column({ nullable: true })
  levelStartSp: number | null

  @Column({ nullable: true })
  queuePosition: number | null

  @Column({ primary: true })
  skillId: number

  @Column('timestamp with time zone', { nullable: true })
  startDate: Date | null

  @Column({ nullable: true })
  trainingStartSp: number | null
}
