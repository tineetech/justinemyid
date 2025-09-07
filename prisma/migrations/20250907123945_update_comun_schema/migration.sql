/*
  Warnings:

  - You are about to drop the column `bagan` on the `Community` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Community` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Community` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Community" DROP COLUMN "bagan",
DROP COLUMN "image",
DROP COLUMN "name";
