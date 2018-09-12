/* eslint-disable */
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

INSERT INTO users
    (user_name, email, pass, points)
VALUES
    ('Armand', 'armandl@email.com', 'password12', 40),
    ('Simon', 'simon@email.com', 'password12', 32),
    ('Emma', 'emma@email.com', 'password12', 20);

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

INSERT INTO inventory
    (title, what, why, ext_link, img_link, reward_points)
VALUES
    ('Refillable Waterbottle', 'great to bring with you daily', 'saving lots of plastic as no need to constantly buy new PET bottles', 'https://www.chillysbottles.com/product/bottle/500ml/29562241043/?gclid=CjwKCAjw8uLcBRACEiwAaL6MScdW_rv7TBMOeGYZUqg-xx1BKhz0ZC7I1DFGAfeA_0rD5jKlqSuQuhoCIPwQAvD_BwE', 'https://assets.chillysbottles.com/assestNew/_width160/Pastel-Green-500ml-Front.png?mtime=20180905125046', 8),
    ('Recycled loo roll', 'saves paper aka trees', 'great feeling', 'https://uk.whogivesacrap.org/products/recycled-3ply-toilet-paper', 'https://cdn.shopify.com/s/files/1/1502/3454/products/WGAC_ProductPhotos_2018Packaging_TransparentBG_DLSingleRoll_large.png?v=1531168094', 3);

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

INSERT INTO challenges
    (title, what, why, ext_link, img_link, reward_points, repeatable, inventory_id)
VALUES
    ('Go to a farmers market', 'Go to a farmers market', 'you can find organic produces and save packaging waste', 'https://www.lfm.org.uk/', 'https://s3.eu-central-1.amazonaws.com/lfm-web-prod/images/2016_May_Balham_Herbal_Haven_herbs.0f37de8c.fill-360x360.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Expires=3600&X-Amz-Credential=AKIAJXL7S33WNUYF726A%2F20180912%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Date=20180912T140221Z&X-Amz-Signature=3683277a9cc390d6d2d38d8bbad863a38bf16da79f3049a897ac8dad46078746', 10, 'false', 0),
    ('Dont buy plastic water bottles for a week', 'maybe buy refillable bottle', 'saving lots of plastic', 'https://www.independent.co.uk/environment/plastic-bottles-waste-recycling-pollution-single-use-keep-britain-tidy-water-a8307591.html', 'https://www.banthebottle.net/wp-content/uploads/2009/06/ban-all-bottles-300x225.jpg', 10, 'true', 1);

CREATE TABLE inventory_status
(
    id SERIAL PRIMARY KEY,
    inventory_id INTEGER REFERENCES inventory(id),
    user_id INTEGER REFERENCES users(id),
    bought BOOLEAN
);

INSERT INTO inventory_status
    (inventory_id, user_id, bought)
VALUES
    (1, 1, 'false'),
    (2, 1, 'true'),
    (1, 2, 'true'),
    (2, 2, 'false'),
    (1, 3, 'false'),
    (2, 3, 'false');

CREATE TABLE challenge_status
(
    id SERIAL PRIMARY KEY,
    challenge_id INTEGER REFERENCES challenges(id),
    user_id INTEGER REFERENCES users(id),
    status INTEGER
);

INSERT INTO challenge_status
    (challenge_id, user_id, status)
VALUES
    (1, 1, 0),
    (2, 1, 1),
    (1, 2, 2),
    (2, 2, 1),
    (1, 3, 0),
    (2, 3, 1);

COMMIT;