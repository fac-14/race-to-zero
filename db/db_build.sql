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
    ('Armand', 'armandl@email.com', 'password12', 10),
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
    (title, what, why, ext_link, img_link, reward_points, repeatable)
VALUES
    ('Refillable Bottle', 'great to bring with you daily', 'saving lots of plastic as no need to constantly buy new PET bottles', 'https://www.chillysbottles.com/product/bottle/500ml/29562241043/?gclid=CjwKCAjw8uLcBRACEiwAaL6MScdW_rv7TBMOeGYZUqg-xx1BKhz0ZC7I1DFGAfeA_0rD5jKlqSuQuhoCIPwQAvD_BwE', '../../public/imgs/inventory-icons/water-bottle.svg', 8, TRUE),
    ('Recycle Loo-roll', 'saves paper aka trees', 'great feeling', 'https://uk.whogivesacrap.org/products/recycled-3ply-toilet-paper', '../../public/imgs/inventory-icons/toilet-paper.svg', 3, FALSE),
    ('Handkerchief', 'eco friendly sneezin', 'great feeling', 'https://uk.whogivesacrap.org/products/recycled-3ply-toilet-paper', '../../public/imgs/inventory-icons/handkerchief.svg', 3, FALSE),
    ('Dish Towels', 'saves paper aka trees', 'great feeling', 'https://uk.whogivesacrap.org/products/recycled-3ply-toilet-paper', '../../public/imgs/inventory-icons/towel.svg', 3, FALSE),
    ('Tupperware', 'saves paper aka trees', 'great feeling', 'https://uk.whogivesacrap.org/products/recycled-3ply-toilet-paper', '../../public/imgs/inventory-icons/tupperware.svg', 3, FALSE),
    ('Reusable Bag', 'saves paper aka trees', 'great feeling', 'https://uk.whogivesacrap.org/products/recycled-3ply-toilet-paper', '../../public/imgs/inventory-icons/bag.svg', 3, FALSE),
    ('Recycle Toothbrush', 'saves paper aka trees', 'great feeling', 'https://uk.whogivesacrap.org/products/recycled-3ply-toilet-paper', '../../public/imgs/inventory-icons/toothbrush.svg', 3, FALSE);


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
    (inventory_id, title, what, why, ext_link, img_link, reward_points, repeatable)
VALUES
    (NULL, 'Go to a farmers market', 'Go to a farmers market', 'you can find organic produces and save packaging waste', 'https://www.lfm.org.uk/', 'https://s3.eu-central-1.amazonaws.com/lfm-web-prod/images/2016_May_Balham_Herbal_Haven_herbs.0f37de8c.fill-360x360.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Expires=3600&X-Amz-Credential=AKIAJXL7S33WNUYF726A%2F20180912%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Date=20180912T140221Z&X-Amz-Signature=3683277a9cc390d6d2d38d8bbad863a38bf16da79f3049a897ac8dad46078746', 10, 'false'),
    (NULL, 'Grocery shopping', 'With just a few changes in our grocery shopping habits, we can greatly reduce our amount of waste', 'If you already know where your local bulk store is, head one over and stock up on some weekly staples like oatmeal, rice, lentils and dry beans. If you dont know where your local bulk store is, get out there and do some digging!', 'https://www.independent.co.uk/environment/plastic-bottles-waste-recycling-pollution-single-use-keep-britain-tidy-water-a8307591.html', 'http://www.besthealthmag.ca/wp-content/uploads/2016/05/01_farmers_market.jpg', 10, 'true'),
    (1, 'Reusable water bottle', 'Before you leave your house, make sure you have a reusable bottle with you. Dont forget! Get in the habit of carrying it with you for the WHOLE month.', '60 million water bottles are landfilled a day. A DAY. Thats a lot of plastic bottles. And, plastic cant really be recycled. Its downcycled, and with oil prices so low its more expensive to use recycled plastic. A lot of our plastic is landfilled at the recycling plant. Theres no incentive to recycle it at all right now.', 'https://www.independent.co.uk/environment/plastic-bottles-waste-recycling-pollution-single-use-keep-britain-tidy-water-a8307591.html', 'https://www.banthebottle.net/wp-content/uploads/2009/06/ban-all-bottles-300x225.jpg', 10, 'true'),
    (NULL, 'Pack a picnic', 'Ditch single-use items in lieu of reuseables. Pack a delicious picnic at home.', 'Picnicking is one of my favorite things to do when the weather is nice. I love spending the day outside, and its just bonus to sit on a blanket, kick back, and chow down on finger food. Disposable food and beverage packaging are some of the top offenders for litter. The thought of bringing something disposable on a picnic had never even crossed my mind. As a house warming present, my mom sent me a decked out picnic basket.', 'https://www.independent.co.uk/environment/plastic-bottles-waste-recycling-pollution-single-use-keep-britain-tidy-water-a8307591.html', 'https://images.lecker.de/,id=f6fce04f,b=lecker,w=610,cg=c.jpg', 10, 'true'),
    (NULL, 'Say No to Straws', 'Next time youre at a restaurant or the cafeteria, order your drink without a straw. Go ahead and give it some practice.', '500 million plastic straws are used in the US each and every day! Its a huge problem because plastic doesnt go away. It only gets smaller and smaller. Its a huge threat to marine life and human health. But, you can help make a positive impact!', 'https://www.independent.co.uk/environment/plastic-bottles-waste-recycling-pollution-single-use-keep-britain-tidy-water-a8307591.html', 'https://images.lecker.de/,id=f6fce04f,b=lecker,w=610,cg=c.jpg', 10, 'true');


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

ALTER TABLE challenge_status 
ADD CONSTRAINT chall_stat_unique UNIQUE (challenge_id, user_id, status);

COMMIT;