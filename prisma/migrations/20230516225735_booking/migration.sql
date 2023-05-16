/*
  Warnings:

  - You are about to drop the column `nome` on the `office` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `office` table. All the data in the column will be lost.
  - Added the required column `type` to the `Office` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `office` DROP COLUMN `nome`,
    DROP COLUMN `tipo`,
    ADD COLUMN `name` VARCHAR(191) NULL,
    ADD COLUMN `type` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Booking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `officeId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `bookedFrom` DATETIME(3) NOT NULL,
    `bookedUntil` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_officeId_fkey` FOREIGN KEY (`officeId`) REFERENCES `Office`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
