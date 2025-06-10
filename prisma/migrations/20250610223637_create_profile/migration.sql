-- CreateTable
CREATE TABLE "profiles" (
    "id" TEXT NOT NULL,
    "avatar_url" TEXT,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);
