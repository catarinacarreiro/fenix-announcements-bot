const fs = require('fs');
const config = require('../config');

module.exports = new Map();

function walk(dir, prefix){
	fs.readdirSync(dir + '/').forEach((file) => {
		if (file.match(/\.js$/) && file !== 'index.js') {
			let command = require('./' + prefix + file);
			module.exports.set(command.name, command);
			command.helpString = `${config.BOT_PREFIX}${command.name}${command.usage} - ${command.description}`;
			command.showHelp = message => message.channel.send(`\`\`\`${command.helpString}\`\`\``);
		}
	});
}

walk(__dirname, '');
