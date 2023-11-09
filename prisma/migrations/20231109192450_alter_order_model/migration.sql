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
    "attendantId" TEXT,
    CONSTRAINT "orders_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "orders_attendantId_fkey" FOREIGN KEY ("attendantId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_orders" ("attendantId", "customerId", "description", "end_service", "id", "service_requested", "start_service", "title", "topic") SELECT "attendantId", "customerId", "description", "end_service", "id", "service_requested", "start_service", "title", "topic" FROM "orders";
DROP TABLE "orders";
ALTER TABLE "new_orders" RENAME TO "orders";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
