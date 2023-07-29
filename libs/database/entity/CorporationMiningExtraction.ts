import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Entity()
export class CorporationMiningExtraction {
  @Column("timestamp with time zone", {

    nullable: true,
  })
  chunkArrivalTime: Date | null;

  @Column("timestamp with time zone", {

    nullable: true,
  })
  extractionStartTime: Date | null;

  @Column( { nullable: true })
  moonId: number | null;

  @Column("timestamp with time zone", {

    nullable: true,
  })
  naturalDecayTime: Date | null;

  @PrimaryColumn("bigint")
  structureId: string;
}
