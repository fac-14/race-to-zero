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
    ('Refillable Bottle', 'A great way to make sure that you dont waste plastic constantly buying water bottles', 'Each year enough plastic is thrown away to circle the earth four times, get smart, get zero', 'https://www.chillysbottles.com/product/bottle/500ml/29562241043/?gclid=CjwKCAjw8uLcBRACEiwAaL6MScdW_rv7TBMOeGYZUqg-xx1BKhz0ZC7I1DFGAfeA_0rD5jKlqSuQuhoCIPwQAvD_BwE', '../../public/imgs/inventory-icons/water-bottle.svg', 8, TRUE),
    ('Toilet Roll', 'Trees are for hugging, not chopping, for the most part', 'We’re amazed that most toilet paper is still made with virgin trees. Not only are we cutting them down, wiping our bums and flushing them down the toilet, but we’re consuming loads of energy and water along the way', 'https://uk.whogivesacrap.org/products/recycled-3ply-toilet-paper', '../../public/imgs/inventory-icons/toilet-paper.svg', 3, FALSE),
    ('Handkerchief', 'Wait, you can recycle this?', 'Once upon a time they were a staple of any self-respecting man or woman, now they are scattered to the edges of a landfill', 'https://startsat60.com/lifestyle/8-ways-to-recycle-your-old-handkerchiefs', '../../public/imgs/inventory-icons/handkerchief.svg', 3, FALSE),
    ('Dish Towels', 'These nifty items are found in surplus in most kitchens', 'If they’re too tatty for donating, the decent parts of the fabric can be upcycled in a number of ways.  aprons made from cute dish towels, cafe-style curtains/blinds for kitchens, baby bibs', 'http://www.recyclethis.co.uk/20101008/how-can-i-reuse-or-recycle-tea-towels', '../../public/imgs/inventory-icons/towel.svg', 3, FALSE),
    ('Tupperware', 'A great way to store your food', 'You can really reduce your impact buy taking tupperware with you to work with your own made food, or giving it a resturant to put your food in.', 'https://www.tupperware.com.au/our-products/use-and-care', '../../public/imgs/inventory-icons/tupperware.svg', 3, FALSE),
    ('Reusable Bag', 'If its not broke why throw it away', 'A sturdy reusable bag, plastic or cotton, is a great way to reduce your impact. If you forget it you can always just hold everything with your hands.', 'https://www.reusethisbag.com/articles/25-reasons-to-go-reusable/', '../../public/imgs/inventory-icons/bag.svg', 3, FALSE),
    ('Toothbrush', 'Save your teeth then the streets', 'It may not seem like much but getting a longer lasting toothbrush or recycling the ones you do have really goes a long way', 'https://recyclenation.com/2015/06/how-to-recycle-toothbrush/', '../../public/imgs/inventory-icons/toothbrush.svg', 3, FALSE);


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

    (NULL, 'Farmers Market', 'Locate a farmers market near you and plan a family trip to visit. Look at all of the beautiful and seasonal produce. Chat with the farmers about how the food is grown. If youre feeling extra adventurous purchase a new or beautiful looking fruit or vegetable and learn to make a new meal!', 'Food can travel a long way before it gets to your plate, and sometimes you dont know how it was grown. At the farmers market, you know your food is local and you can ask the farmer how it was grown. How neat is that!?', 'https://www.lfm.org.uk/markets-home/', '../public/imgs/challenge-pics/1-farmers-market.jpg', 10, true),
    (NULL, 'Say No to Straws', 'Next time youre at a restaurant or the cafeteria, order your drink without a straw. Go ahead and give it some practice.', '500 million plastic straws are used in the US each and every day! Its a huge problem because plastic doesnt go away. It only gets smaller and smaller. Its a huge threat to marine life and human health. But, you can help make a positive impact!', 'https://thelastplasticstraw.org/', '../public/imgs/challenge-pics/2-no-plastic-straws.jpg', 10, true),
    (NULL, 'Zero Waste Snack', 'Most snacks come with a lot of packaging. Think about how all of those tiny packages add up.', 'Instead of reaching for a prepackaged snack try your hand at making your own or reach for a snack that doesnt have a lot of packaging. Here are some ideas: - homemade trail mix - carrot stick and hummus - stovetop popcorn - apple slices in peanut butter - package-free fruits and veggies - or try a homemade version of your favorite packaged snack like a homemade granola bar!', 'https://www.litterless.com/journal/snackideas', '../public/imgs/challenge-pics/3-snack.jpg', 10, true),
    (1, 'Save Water', 'Pick two new ideas to implement at home: - turn off the water while brushing your teeth - take shorter showers or only fill the bathtub half way - help wash produce in a large bowl instead of under running water - fill up the sink to wash the dishes instead of under running water', 'The average UK home uses 400 gallons of water a day. Thats a lot of water! You can help reduce your homes water consumption.', 'https://www.edenproject.com/learn/for-everyone/water-saving-tips', '../public/imgs/challenge-pics/4-save-water.jpg', 10, true),
    (NULL, 'Repair', 'If youve lost a button on a shirt or have a toy with a broken part, dont toss it! Repair it. With a few simple tools, it can be as good as new. Ask friends for help when fixing! You can always look up a YouTube video and learn a new skill together', 'Repairing is a huge part of the zero waste lifestyle. Just because something is broken, doesnt mean its time to get something new. Many times these items can be fixed with just a little bit of effort or know how.', 'https://www.zerowastescotland.org.uk/circular-economy/reuse-repair', '../public/imgs/challenge-pics/5-repair.jpg', 10, true),
    (NULL, 'Walk or Bike', 'Rethink your commute this week! Can you walk or bike to the store? To school? To the library? To work? Find a place you can walk or bike instead of driving.', 'Driving around town uses a lot of gas. Gas is a fossil fuel and one of the main contributors to climate change. You can help with that by walking or biking short distances instead of driving.', 'https://www.sustrans.org.uk/what-you-can-do/use-your-car-less/health-benefits-walking-and-cycling', '../public/imgs/challenge-pics/6-walk-or-bike.jpg', 10, true),
    (6, 'Reusable Bag', 'Practice keeping a reusable bag on you! When youre out shopping, whether it be the hardware store, grocery store, or the pet store use your own bag. If you forget it, try and carry the items without a bag or ask for a box from the stock room. Just remember to recycle the box!', 'When you go to any store, the first instinct is for the clerk to place your purchases inside of a plastic bag. This plastic bag is often unnecessary, and its not good for the environment. Plastic bags are so light they often blow into storm drains and eventually into the ocean.', 'https://www.bulletinbag.com/blog/faqs/reusable-bag-materials-comparison-guide/', '../public/imgs/challenge-pics/7-reusable-bag.jpg', 10, true),
    (NULL, 'Recycling', 'Go online to your local waste management plants website and figure out what you can recycle. Can you recycle plastic number 5? What about plastic number 6? Learn what each of those are and make a list. Make sure you and your family are recycling correctly.', 'Recycling is great, but it should be viewed as a last resort and not the first line of defense. We should first refuse unnecessary waste, then reduce what we need, reuse what we have then and only then should we recycle. But, its important to know whats actually recyclable.', 'https://www.theguardian.com/environment/recycling', '../public/imgs/challenge-pics/8-recycling.jpg', 10, true);

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