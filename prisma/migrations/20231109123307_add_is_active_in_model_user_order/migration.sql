/*
  Warnings:

  - The primary key for the `users_orders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `users_orders` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users_orders" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "start_treatment" DATETIME NOT NULL,
    "end_treatment" DATETIME,
    "is_activate" BOOLEAN NOT NULL DEFAULT true,
    "vendorId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    CONSTRAINT "users_orders_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "users_orders_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "users_orders_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_users_orders" ("clientId", "end_treatment", "orderId", "start_treatment", "topic", "vendorId") SELECT "clientId", "end_treatment", "orderId", "start_treatment", "topic", "vendorId" FROM "users_orders";
DROP TABLE "users_orders";
ALTER TABLE "new_users_orders" RENAME TO "users_orders";
CREATE UNIQUE INDEX "users_orders_orderId_key" ON "users_orders"("orderId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
