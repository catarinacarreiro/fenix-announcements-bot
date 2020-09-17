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
1. Navigate to [Discord's Developer Portal](https://discordapp.com/developers/applications/).
2. Create a new application.
3. Name it (this is not the bot's name).
4. Navigate to the Bot tab.
5. Add a bot.
6. Give it a name.
7. Make sure that both PUBLIC BOT and REQUIRES OAUTH2 CODE GRANT are disabled.

### Adding The Bot To The Server
1. Navigate to [Discord's Developer Portal](https://discordapp.com/developers/applications/).
2. Select the application containing the bot.
3. Navigate to the OAuth2 tab.
4. Scroll down to the OAuth2 URL Generator section.
5. Under Scopes select bot.
6. Navigate to the generated link.
7. Add the bot to your desired server.

### Deploying The Bot
#### Deploying Locally
1. Install [Node.js](https://nodejs.org/en/download/) and [MongoDB](https://www.mongodb.com/try/download/community).
2. Clone this repository.
```
git clone https://github.com/cristiano-clemente/fenix-announcements-bot.git
```
3. Navigate to the repository.
```
cd fenix-discord-bot
```
4. Install dependencies.
```
npm install
```
5. Make a copy of .env.default and name it .env.
```
cp .env.default .env
```
6. Open .env and fill in the [Config Vars](#configuring-the-bot).
7. Run the bot.
```
npm start
```

#### Deploying To Heroku
1. Click this button.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/cristiano-clemente/fenix-announcements-bot)

2. Definir um nome e região
3. Fill in the [Config Vars](#configuring-the-bot).
4. Click "Deploy App".

### Configuring The Bot

## Commands
```
list - lists all courses and their acronyms
activate [acronym] - Activates the announcements
deactivate [acronym] - FIX ME
help - lists all available commands and what they do
```
