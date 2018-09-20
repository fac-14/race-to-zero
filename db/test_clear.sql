BEGIN;

    DROP TABLE IF EXISTS users, inventory, inventory_status, challenges, challenge_status
    CASCADE;

COMMIT;