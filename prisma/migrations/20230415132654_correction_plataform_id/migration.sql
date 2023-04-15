-- AlterTable
CREATE SEQUENCE plataforms_id_seq;
ALTER TABLE "plataforms" ALTER COLUMN "id" SET DEFAULT nextval('plataforms_id_seq');
ALTER SEQUENCE plataforms_id_seq OWNED BY "plataforms"."id";
