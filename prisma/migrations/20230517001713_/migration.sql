/*
  Warnings:

  - You are about to drop the column `userId` on the `booking` table. All the data in the column will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[officeId,bookedFrom]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clientId` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `booking` DROP FOREIGN KEY `Booking_userId_fkey`;

-- AlterTable
ALTER TABLE `booking` DROP COLUMN `userId`,
    ADD COLUMN `clientId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `Client` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Booking_officeId_bookedFrom_key` ON `Booking`(`officeId`, `bookedFrom`);

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
