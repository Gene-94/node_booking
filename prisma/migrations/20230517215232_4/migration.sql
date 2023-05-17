/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Office` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `office` ADD COLUMN `details` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Office_name_key` ON `Office`(`name`);
