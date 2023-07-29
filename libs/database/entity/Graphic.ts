import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Graphic {
  @PrimaryColumn()
  graphicId: number

  @Column('text', { nullable: true })
  collisionFile: string | null

  @Column('text', { nullable: true })
  graphicFile: string | null

  @Column('text', { nullable: true })
  iconFolder: string | null

  @Column('text', { nullable: true })
  sofDna: string | null

  @Column('text', { nullable: true })
  sofFationName: string | null

  @Column('text', { nullable: true })
  sofHullName: string | null

  @Column('text', { nullable: true })
  sofRaceName: string | null
}
