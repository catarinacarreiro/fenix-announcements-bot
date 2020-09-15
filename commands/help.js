const fs = require('fs');
const config = require('../config');

module.exports = {
	description: 'FIX ME',
	usage: 'FIX ME',
	name: 'help',
	handle: msg => {

		var helpList = '';

		function walk(dir, prefix){
			fs.readdirSync(dir + '/').forEach((file) => {
				if (file.match(/\.js$/) && file !== 'index.js') {
					let command = require('./' + prefix + file);
					//command.helpString = `${config.BOT_PREFIX}${command.name} ${command.usage} - ${command.description}`;
					helpList += `${command.helpString}\n`;
				}
			});
		}

		walk(__dirname, '');

		msg.channel.send(`\`\`\`Command list:\n${helpList}\n[] - opcional <> - obrigatório\`\`\``);
	}
};
