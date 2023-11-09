/*
  Warnings:

  - You are about to drop the `users_orders` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `clientId` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `is_activate` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `is_vendor` on the `users` table. All the data in the column will be lost.
  - Added the required column `attendantId` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerId` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_service` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "users_orders_orderId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "users_orders";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_orders" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "service_requested" BOOLEAN NOT NULL DEFAULT false,
    "start_service" DATETIME NOT NULL,
    "end_service" DATETIME,
    "customerId" TEXT NOT NULL,
    "attendantId" TEXT NOT NULL,
    CONSTRAINT "orders_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "orders_attendantId_fkey" FOREIGN KEY ("attendantId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_orders" ("description", "id", "title", "topic") SELECT "description", "id", "title", "topic" FROM "orders";
DROP TABLE "orders";
ALTER TABLE "new_orders" RENAME TO "orders";
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "sector" TEXT NOT NULL DEFAULT 'not attendant',
    "is_attendant" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_users" ("email", "id", "name", "password", "sector") SELECT "email", "id", "name", "password", "sector" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
