<br />
<p align="center">
  <a>
    <img src="images/ist_logo.png" alt="Logo" width="80" height="80">
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

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```

### Installation

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

## Commands
```
list - lists all courses and their acronyms
activate [acronym] - Activates the announcements
deactivate [acronym] - FIX ME
help - lists all available commands and what they do
```
