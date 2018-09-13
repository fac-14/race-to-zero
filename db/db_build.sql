
BEGIN;

    DROP TABLE IF EXISTS users, inventory, inventory_status, challenges, challenge_status
    CASCADE;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    pass VARCHAR(100) NOT NULL,
    points INTEGER
);


CREATE TABLE inventory
(
    id SERIAL PRIMARY KEY,
    title TEXT,
    what TEXT,
    why TEXT,
    ext_link TEXT,
    img_link TEXT,
    reward_points INTEGER,
    repeatable BOOLEAN
);

CREATE TABLE challenges
(
    id SERIAL PRIMARY KEY,
    title TEXT,
    what TEXT,
    why TEXT,
    ext_link TEXT,
    img_link TEXT,
    reward_points INTEGER,
    repeatable BOOLEAN,
    inventory_id INTEGER REFERENCES inventory(id)
);

CREATE TABLE inventory_status
(
    id SERIAL PRIMARY KEY,
    inventory_id INTEGER REFERENCES inventory(id),
    user_id INTEGER REFERENCES users(id),
    bought BOOLEAN
);


CREATE TABLE challenge_status
(
    id SERIAL PRIMARY KEY,
    challenge_id INTEGER REFERENCES challenges(id),
    user_id INTEGER REFERENCES users(id),
    status INTEGER
);

COMMIT;