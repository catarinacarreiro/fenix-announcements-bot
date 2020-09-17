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

## Commands
```
listar - lists all courses and their acronyms
ativar [acronym] - activates the announcements for the course specified
desativar [acronym] - deactivates the announcements for the course specified
ajuda - lists all available commands and what they do
```

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

2. Give it a name and pick a region.
3. Fill in the [Config Vars](#configuring-the-bot).
4. Click "Deploy App".

### Configuring The Bot
**BOT_TOKEN**
1. Navigate to [Discord's Developer Portal](https://discordapp.com/developers/applications/).
2. Select the application containing the bot.
3. Navigate to the Bot tab.
4. Under TOKEN click Copy.
**Warning:** Anyone with your bot token can control your bot.

**BOT_CHANNEL**
1. Open your Discord settings
2. Navigate to the Appearance tab.
3. Scroll down to the ADVANCED settings.
4. Activate Developer Mode.
5. Navigate to the discord server where your bot is.
6. Right-click the channel you want your bot to post to.
7. Click "Copy ID".

**BOT_PREFIX**

Prefix for all the bot's commands.

**BOT_ANNOUNCEMENT**

Announcement format. The following tags are available:

{course_acronym} - course acronym

{course_name} - course name

{title} - announcement title

{description} - announcement description/content

{date} - announcement date

{author} - announcement author

{link} - announcement link

**FENIX_URL**

URL for the Fenix API.

**FENIX_DEGREE**
1. Navigate to FENIX_URL/degrees.
2. Find your Bachelor/Master.
3. Copy the ID.

**FEED_UPDATE_INTERVAL**

Time (in seconds) between calls.

**FEED_SEND_FIRST**

When a course is added for the first time do you want the bot to post previous announcements?

**LOCALE**

Locale used to display time.
