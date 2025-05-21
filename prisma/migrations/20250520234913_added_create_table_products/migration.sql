/*
  Warnings:

  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('ELETRONIC', 'FOOD', 'FRAGILE', 'HOME', 'OTHER');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3);

-- DropTable
DROP TABLE "Product";

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "in_stock" INTEGER NOT NULL,
    "is_available" BOOLEAN NOT NULL DEFAULT true,
    "category" "Category" NOT NULL,
    "tags" TEXT[],
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
