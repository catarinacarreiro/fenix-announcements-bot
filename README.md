<br />
<p align="center">
  <a>
    <img src="images/ist_logo.png"">
  </a>

  <h3 align="center">Fénix Announcements Bot (FAB)</h3>

  <p align="center">
    A discord bot that automatically displays courses' announcements on a channel.
  </p>
</p>

## How It Works
The bot regularly checks for new entries on a course's rss feed suplied by [Instituto Superior Técnico](https://tecnico.ulisboa.pt/)'s [FénixEdu](https://fenixedu.org/) and automatically sends them to a certain discord server channel.

## Built With
+ [Node.js](https://nodejs.org/en/)
+ [discord.js](https://www.npmjs.com/package/discord.js)
+ [Mongoose](https://www.npmjs.com/package/mongoose)
+ [axios](https://www.npmjs.com/package/axios)
+ [feedparser](https://www.npmjs.com/package/feedparser)
+ [moment](https://momentjs.com/)
+ [html-to-text](https://www.npmjs.com/package/html-to-text)
+ [double-ended-queue](https://www.npmjs.com/package/double-ended-queue)
+ [dotenv](https://www.npmjs.com/package/dotenv)

## How Can I Use It In My Own Discord Server
### Creating The Bot
1. Navigate to [Discord's Developer Portal](https://discordapp.com/developers/applications/), create a new application and name it (this is not the bot's name).
2. Navigate to the Bot tab, add a bot, give it a name and make sure that both PUBLIC BOT and REQUIRES OAUTH2 CODE GRANT are disabled.

### Adding The Bot To The Server
1. Navigate to [Discord's Developer Portal](https://discordapp.com/developers/applications/), select the application containing the bot, navigate to the OAuth2 tab, scroll down to the OAuth2 URL Generator section and under Scopes select bot, navigate to the generated link and add the bot to your desired server.

### Deploying The Bot
#### Deploying Locally
1. Install [Node.js](https://nodejs.org/en/download/) and [MongoDB](https://www.mongodb.com/try/download/community).
2. Clone this repository. `git clone https://github.com/cristiano-clemente/fenix-announcements-bot.git`
3. Navigate to the repository. `cd fenix-discord-bot`
4. Install dependencies. `npm install`
5. Make a copy of .env.default, name it .env e fill in the configurations. `cp .env.default .env`
6. Run the bot. `npm start`

#### Deploying To Heroku
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/cristiano-clemente/fenix-announcements-bot)

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
```sh
git clone https://github.com/your_username_/Project-Name.git
```
3. Install NPM packages
```sh
npm install
```
4. Enter your API in `config.js`
```JS
const API_KEY = 'ENTER YOUR API';
```

### Configuring The Bot

## Commands
```
list - lists all courses and their acronyms
activate [acronym] - Activates the announcements
deactivate [acronym] - FIX ME
help - lists all available commands and what they do
```
