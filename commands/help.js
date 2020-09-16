module.exports = {
	description: 'enumera todos os comandos e respetiva descrição',
	usage: '',
	name: 'ajuda',
	handle: msg => {
		let list = require('./list');
		let activate = require('./activate');
		let deactivate = require('./deactivate');
		let help = require('./help');
		var helpList = '';
		helpList += `${list.helpString}\n`;
		helpList += `${activate.helpString}\n`;
		helpList += `${deactivate.helpString}\n`;
		helpList += `${help.helpString}\n`;
		msg.channel.send(`\`\`\`Command list:\n${helpList}\`\`\``);
	}
};
