/*
  Warnings:

  - The primary key for the `Status` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Id` on the `Status` table. All the data in the column will be lost.
  - Made the column `Timestamp` on table `Status` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Players` on table `Status` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ServerVersion` on table `Status` required. This step will fail if there are existing NULL values in that column.
  - Made the column `StartTime` on table `Status` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Status" DROP CONSTRAINT "Status_pkey",
DROP COLUMN "Id",
ALTER COLUMN "Timestamp" SET NOT NULL,
ALTER COLUMN "Players" SET NOT NULL,
ALTER COLUMN "ServerVersion" SET NOT NULL,
ALTER COLUMN "StartTime" SET NOT NULL,
ALTER COLUMN "Vip" SET DEFAULT false,
ADD CONSTRAINT "Status_pkey" PRIMARY KEY ("Timestamp");

-- CreateTable
CREATE TABLE "EsiToken" (
    "AccountId" TEXT NOT NULL,
    "CharacterId" INTEGER NOT NULL,
    "CharacterName" TEXT NOT NULL,
    "Scopes" TEXT NOT NULL,
    "TokenType" TEXT NOT NULL,
    "ExpiresOn" TIMESTAMPTZ NOT NULL,
    "RefreshToken" TEXT NOT NULL,

    CONSTRAINT "EsiToken_pkey" PRIMARY KEY ("CharacterId")
);
