/*
  Warnings:

  - You are about to alter the column `name` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.

*/
-- AlterTable
ALTER TABLE `profile` MODIFY `userAdd` VARCHAR(200) NOT NULL,
    MODIFY `userState` VARCHAR(200) NOT NULL,
    MODIFY `userCity` VARCHAR(200) NOT NULL,
    MODIFY `userPostcode` VARCHAR(200) NOT NULL,
    MODIFY `userCountry` VARCHAR(200) NOT NULL,
    MODIFY `userPhone` VARCHAR(200) NOT NULL,
    MODIFY `shippingAdd` VARCHAR(200) NOT NULL,
    MODIFY `shippingState` VARCHAR(200) NOT NULL,
    MODIFY `shippingCity` VARCHAR(200) NOT NULL,
    MODIFY `shippingPostcode` VARCHAR(200) NOT NULL,
    MODIFY `shippingCountry` VARCHAR(200) NOT NULL,
    MODIFY `shippingPhone` VARCHAR(200) NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `name` VARCHAR(100) NOT NULL,
    MODIFY `password` VARCHAR(300) NOT NULL;

-- CreateTable
CREATE TABLE `Brands` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `brandName` VARCHAR(100) NOT NULL,
    `brandImg` VARCHAR(300) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
