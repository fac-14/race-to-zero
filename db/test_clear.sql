BEGIN;

    DROP TABLE IF EXISTS boards, users, topics
    CASCADE;

COMMIT;