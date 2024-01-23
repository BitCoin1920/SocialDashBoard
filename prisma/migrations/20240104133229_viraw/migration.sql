-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "type" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "remember_password" TEXT,
    "last_login" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "type_users" (
    "id" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "type_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "historic" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "historic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "influencer" (
    "id" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "following" TEXT NOT NULL,
    "followers" TEXT NOT NULL,
    "status" INTEGER NOT NULL,
    "captacao" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "influencer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL,
    "posted" BOOLEAN NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "influencer" TEXT NOT NULL,
    "observation" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "status" (
    "id" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plug_chat" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "influencer" TEXT NOT NULL,
    "responsavel" TEXT NOT NULL,
    "date_init" TEXT NOT NULL,
    "hour_init" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "plug_chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bank_data" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "pix" TEXT NOT NULL,
    "value" TEXT,
    "influencer" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bank_data_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "historic_user_key" ON "historic"("user");

-- CreateIndex
CREATE UNIQUE INDEX "influencer_username_key" ON "influencer"("username");

-- CreateIndex
CREATE UNIQUE INDEX "plug_chat_influencer_key" ON "plug_chat"("influencer");

-- CreateIndex
CREATE UNIQUE INDEX "bank_data_pix_key" ON "bank_data"("pix");

-- CreateIndex
CREATE UNIQUE INDEX "bank_data_influencer_key" ON "bank_data"("influencer");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_type_fkey" FOREIGN KEY ("type") REFERENCES "type_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historic" ADD CONSTRAINT "historic_user_fkey" FOREIGN KEY ("user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "influencer" ADD CONSTRAINT "influencer_status_fkey" FOREIGN KEY ("status") REFERENCES "status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "influencer" ADD CONSTRAINT "influencer_captacao_fkey" FOREIGN KEY ("captacao") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_influencer_fkey" FOREIGN KEY ("influencer") REFERENCES "influencer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plug_chat" ADD CONSTRAINT "plug_chat_influencer_fkey" FOREIGN KEY ("influencer") REFERENCES "influencer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plug_chat" ADD CONSTRAINT "plug_chat_responsavel_fkey" FOREIGN KEY ("responsavel") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bank_data" ADD CONSTRAINT "bank_data_influencer_fkey" FOREIGN KEY ("influencer") REFERENCES "influencer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
