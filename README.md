[![Build Status](https://travis-ci.com/fac-14/race-to-zero.svg?branch=master)](https://travis-ci.com/fac-14/race-to-zero) [![codecov](https://codecov.io/gh/fac-14/race-to-zero/branch/master/graph/badge.svg)](https://codecov.io/gh/fac-14/race-to-zero)

# Race to Zero

![](https://media.giphy.com/media/ful6IbWkBsVhe/giphy.gif)

Race to Zero helps users start achieving a zero waste lifestyle. Through simple challenges and information, users can discover easy ways to begin reducing their waste and learn why, tracking their progress through a points and achievements based gaming system. 

### The Team
[Joe](https://github.com/thejoefriel) - Scrum Master | 
[Emma](https://github.com/SleepySheepy172) - DevOps | 
[Armand](https://github.com/Armand-Lluka) - Researcher | 
[Simon](https://github.com/dupreesi) - QA 

### Tech Stack

| Core | Testing | Other |
| - | -------- | -------- |
|Node|jest|bcryptjs
|Express|supertest|pg-promise
|Handlebars|eslint|body-parser
|PostgreSQL|nyc|serve-favicon
|HTML|codecov|env2|
|CSS|nodemon||
|Sass|||


## Getting Started
How to get a copy of the project up and running on your local machine.

*Please ensure you have this software **installed and running** on your local machine **before** you attempt to run this webapp.*
> **Node** (via nvm recomended)
> see: https://github.com/creationix/nvm

> **PostgreSQL**
> see: https://wiki.postgresql.org/wiki/Detailed_installation_guides

### Setup

#### 1. Clone the repo:

```
$ git clone https://github.com/fac-14/race-to-zero.git
$ cd race-to-zero
```
#### 2. Install *Dependencies* from NPM

```
$ npm i
```

#### 3. Ensure you have the Required Environment Variables

create a `.env` file in your `race-to-zero` directory.                                                                            
add a line for your `DATABASE_URL` variable and one for `TEST_DB_URL`.
```sh
DATABASE_URL = postgres://simon:pw123@localhost:5432/race_zero
TEST_DB_URL = postgres://simon:pw123@localhost:5432/test_race2
```

#### 4. Make sure the Databases are setup
create a `race-zero` and `test_race2` database in psql and alter the database owner.
```
$ psql (or pgcli)
# CREATE DATABASE race_zero;
# CREATE DATABASE test_race2;
# CREATE SUPERUSER simon WITH PASSWORD 'pw123';
# ALTER DATABASE race_zero OWNER TO simon;
# ALTER DATABASE test_race2 OWNER TO simon;
```
populate the `race_zero` database.
```
$ npm run build
```

#### 5. Run the Tests
to make sure everything is working as it should.
```
npm test
```

#### 5. Run the Server

```
npm run dev
```

That's it.  
Now, play with it to your heart's content!


## Design

### Initial Problem

The UK is poor at recycling. 

### Secondary & User Research

- People want to recycle more
- Don't really know what, how, where to recycle
- Don't see a big difference / there's confusion between recycling, reducing waste, re-using items - these all get conflated as the same issue for people
- Want to find easy ways to understand why waste matters
- Want easy ways to learn how to reduce waste
- Want a fun way to track progress to motivate them to do more
- There are lots of blogs/websites about reducing waste and zero waste living but they are often information overload

### Goals

Create a fun way for people to working towards a zero waste lifestyle

### Initial Prototype

[View initial prototype for user testing here](https://projects.invisionapp.com/share/N8NX3P536EQ)

### User testing

Tested with four users. Key findings:

- Need to re-assess how the user interacts with challenges in relation to accepting and completing them

- Wanted more ways to get a sense of 'reward' for completed challenges

- The app design was popular and felt familiar to people

- Finding the stats seemed more difficult than finding the sign out option - moving this to the avatar dropdown could be more user friendly


## User stories

#### Unregistered User Stories
- [x] As a unregistered user I want to be able to see a landing page so I can find out more about the zero waste challenge. 

- [ ] As an unregistered user I want to be able to see further information about zero waste so that I can understand why a zero waste lifestyle is important.

- [ ] As an unregistered user I want to be able to find out more about the specific details of the app, so I can decide. Some slides indicating how the app will work.

- [ ] As an unregistered user I want to be able to signup so that I can create a profile. 

- [ ] As a unregistered user I want to be able to return to the landing page so that I can re-read the info provided. 

- [ ] As a registered user I want to be able to log-in so that I can view my account. 

#### Logged-In User stories
- [ ] As a new user I want to be able to find out more about how to use the app once I've logged in. 

- [ ] As a logged in user I want to be able to log-out from any page on the site. 

#### Challenge based stories
- [ ] As a logged in user I want to be able to view a list of challenges that will help me reduce waste. 

- [ ] As a logged in user I want to be able to click any challenge so I can find out more information about that challenge, how many points I will earn by completing it and why it matters. 

- [ ] As a logged in user I want to be able to accept a challenge. [![Build Status](https://travis-ci.com/fac-14/race-to-zero.svg?branch=master)](https://travis-ci.com/fac-14/race-to-zero) [![codecov](https://codecov.io/gh/fac-14/race-to-zero/branch/master/graph/badge.svg)](https://codecov.io/gh/fac-14/race-to-zero)

# Race to Zero

![](https://media.giphy.com/media/ful6IbWkBsVhe/giphy.gif)

Race to Zero helps users start achieving a zero waste lifestyle. Through simple challenges and information, users can discover easy ways to begin reducing their waste and learn why, tracking their progress through a points and achievements based gaming system. 

### The Team
[Joe](https://github.com/thejoefriel) - Scrum Master | 
[Emma](https://github.com/SleepySheepy172) - DevOps | 
[Armand](https://github.com/Armand-Lluka) - Researcher | 
[Simon](https://github.com/dupreesi) - QA 

### Tech Stack

| Core | Testing | Other |
| - | -------- | -------- |
|Node|jest|bcryptjs
|Express|supertest|pg-promise
|Handlebars|eslint|body-parser
|PostgreSQL|nyc|serve-favicon
|HTML|codecov|env2|
|CSS|nodemon||
|Sass|||


## Getting Started
How to get a copy of the project up and running on your local machine.

*Please ensure you have this software **installed and running** on your local machine **before** you attempt to run this webapp.*
> **Node** (via nvm recomended)
> see: https://github.com/creationix/nvm

> **PostgreSQL**
> see: https://wiki.postgresql.org/wiki/Detailed_installation_guides

### Setup

#### 1. Clone the repo:

```
$ git clone https://github.com/fac-14/race-to-zero.git
$ cd race-to-zero
```
#### 2. Install *Dependencies* from NPM

```
$ npm i
```

#### 3. Ensure you have the Required Environment Variables

create a `.env` file in your `race-to-zero` directory.                                                                            
add a line for your `DATABASE_URL` variable and one for `TEST_DB_URL`.
```sh
DATABASE_URL = postgres://simon:pw123@localhost:5432/race_zero
TEST_DB_URL = postgres://simon:pw123@localhost:5432/test_race2
```

#### 4. Make sure the Databases are setup
create a `race-zero` and `test_race2` database in psql and alter the database owner.
```
$ psql (or pgcli)
# CREATE DATABASE race_zero;
# CREATE DATABASE test_race2;
# CREATE SUPERUSER simon WITH PASSWORD 'pw123';
# ALTER DATABASE race_zero OWNER TO simon;
# ALTER DATABASE test_race2 OWNER TO simon;
```
populate the `race_zero` database.
```
$ npm run build
```

#### 5. Run the Tests
to make sure everything is working as it should.
```
npm test
```

#### 5. Run the Server

```
npm run dev
```

That's it.  
Now, play with it to your heart's content!


## Design

### Initial Problem

The UK is poor at recycling. 

### Secondary & User Research

- People want to recycle more
- Don't really know what, how, where to recycle
- Don't see a big difference / there's confusion between recycling, reducing waste, re-using items - these all get conflated as the same issue for people
- Want to find easy ways to understand why waste matters
- Want easy ways to learn how to reduce waste
- Want a fun way to track progress to motivate them to do more
- There are lots of blogs/websites about reducing waste and zero waste living but they are often information overload

### Goals

Create a fun way for people to working towards a zero waste lifestyle

### Initial Prototype

[View initial prototype for user testing here](https://projects.invisionapp.com/share/N8NX3P536EQ)

### User testing

Tested with four users. Key findings:

- Need to re-assess how the user interacts with challenges in relation to accepting and completing them

- Wanted more ways to get a sense of 'reward' for completed challenges

- The app design was popular and felt familiar to people

- Finding the stats seemed more difficult than finding the sign out option - moving this to the avatar dropdown could be more user friendly


## User stories

#### Unregistered User Stories
- [ ] As a unregistered user I want to be able to see a landing page so I can find out more about the zero waste challenge. 

- [x] As an unregistered user I want to be able to see further information about zero waste so that I can understand why a zero waste lifestyle is important.

- [ ] As an unregistered user I want to be able to find out more about the specific details of the app, so I can decide. Some slides indicating how the app will work.

- [ ] As an unregistered user I want to be able to signup so that I can create a profile. 

- [ ] As a unregistered user I want to be able to return to the landing page so that I can re-read the info provided. 

- [ ] As a registered user I want to be able to log-in so that I can view my account. 

#### Logged-In User stories
- [ ] As a new user I want to be able to find out more about how to use the app once I've logged in. 

- [ ] As a logged in user I want to be able to log-out from any page on the site. 

#### Challenge based stories
- [x] As a logged in user I want to be able to view a list of challenges that will help me reduce waste. 

- [x] As a logged in user I want to be able to click any challenge so I can find out more information about that challenge, how many points I will earn by completing it and why it matters. 

- [x] As a logged in user I want to be able to accept a challenge. 

- [x] As a logged in user I want to be able to view my the progress of my accepted challenges. 

- [x] As a logged in user I want to be able to view my completed challenges. 

- [x] As a logged in user I want to be able to mark my challenges as completed so I can get points and track my progress.

- [x] As a logged in user I want to be able to go to the challenges section at any point, so that I can return to the challenges section.

- [ ] As a user who has just completed a challenge I would like to see a congratulations message so that I feel good about myself.

- [x] As a user who has just completed a challenge I would like the option to share with friends so that I can encourage them to do this as well.

#### Inventory based stories
- [x] As a logged in user I want to be able to view an inventory of suggested zero waste items so that I can find out what things I can buy to reduce waste.

- [x] As a logged in user I want to be able to select a suggested zero waste item so that I can learn more about why it's good and links to recommended products.

- [x] As a logged in user I can mark zero waste items as already owned so that I can get points.

#### Stats/Rank based stories
- [x] As a logged in user I want to be able to see my rank/progress at any point.

- [ ] As a logged in user who has just reached a new level I would like a congratulations message so that I don't cry myself to sleep.

- [ ] As a logged in user I can select stats to get an further overview of my progress so I can see where I am.

- [ ] As a logged in user I want to see a "hall of fame table" showing the top 10 users and their points/ranks so that I can compare my progress with others (Stretch)

#### Navigation stories
- [ ] As as a logged in user I want to be able to click my avatar so I can see a list of navigable options(Stats,account settings, log-out etc).
 
- [ ] As a logged in user I want to be able to find out more information about zero-waste topics(plastics, food waste, clothing waste etc) from the dashboard, so that I can learn more about zero waste at any point.

 
## Build

### Day One

- create user stories
- create additional wireframes based on user testing
- create repo
- [create project plan](https://github.com/fac-14/race-to-zero/projects/1)
- [add issues and priorities](https://github.com/fac-14/race-to-zero/issues) 
- create file/folder structure 
- build environment
- map out express view layouts
- map out database schema 

![](https://files.gitter.im/foundersandcoders/Trash-Team/A64Y/Screen-Shot-2018-09-11-at-16.08.41.png)


- [ ] As a logged in user I want to be able to view my the progress of my accepted challenges. 

- [ ] As a logged in user I want to be able to view my completed challenges. 

- [ ] As a logged in user I want to be able to mark my challenges as completed so I can get points and track my progress.

- [ ] As a logged in user I want to be able to go to the challenges section at any point, so that I can return to the challenges section.

- [ ] As a user who has just completed a challenge I would like to see a congratulations message so that I feel good about myself.

- [ ] As a user who has just completed a challenge I would like the option to share with friends so that I can encourage them to do this as well.

#### Inventory based stories
- [ ] As a logged in user I want to be able to view an inventory of suggested zero waste items so that I can find out what things I can buy to reduce waste.

- [ ] As a logged in user I want to be able to select a suggested zero waste item so that I can learn more about why it's good and links to recommended products.

- [ ] As a logged in user I can mark zero waste items as already owned so that I can get points.

#### Stats/Rank based stories
- [ ] As a logged in user I want to be able to see my rank/progress at any point.

- [ ] As a logged in user who has just reached a new level I would like a congratulations message so that I don't cry myself to sleep.

- [ ] As a logged in user I can select stats to get an further overview of my progress so I can see where I am.

- [ ] As a logged in user I want to see a "hall of fame table" showing the top 10 users and their points/ranks so that I can compare my progress with others

#### Navigation stories
- [ ] As as a logged in user I want to be able to click my avatar so I can see a list of navigable options(Stats,account settings, log-out etc).
 
- [ ] As a logged in user I want to be able to find out more information about zero-waste topics(plastics, food waste, clothing waste etc) from the dashboard, so that I can learn more about zero waste at any point.

 
## Build

### Day One

- create user stories
- create additional wireframes based on user testing
- create repo
- [create project plan](https://github.com/fac-14/race-to-zero/projects/1)
- [add issues and priorities](https://github.com/fac-14/race-to-zero/issues) 
- create file/folder structure 
- build environment
- map out express view layouts
- map out database schema 

![](https://files.gitter.im/foundersandcoders/Trash-Team/A64Y/Screen-Shot-2018-09-11-at-16.08.41.png)
