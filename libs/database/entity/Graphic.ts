import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Graphic {
  @PrimaryColumn()
  graphicId: number

  @Column('text', { nullable: true })
  collisionFile: string

  @Column('text', { nullable: true })
  graphicFile: string

  @Column('text', { nullable: true })
  iconFolder: string

  @Column('text', { nullable: true })
  sofDna: string

  @Column('text', { nullable: true })
  sofFationName: string

  @Column('text', { nullable: true })
  sofHullName: string

  @Column('text', { nullable: true })
  sofRaceName: string
}
