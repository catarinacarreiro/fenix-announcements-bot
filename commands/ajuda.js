module.exports = {
	description: 'enumera todos os comandos e respetiva descrição',
	usage: '',
	name: 'ajuda',
	handle: msg => {
		let list = require('./listar');
		let activate = require('./ativar');
		let deactivate = require('./desativar');
		let help = require('./ajuda');
		var helpList = '';
		helpList += `${list.helpString}\n`;
		helpList += `${activate.helpString}\n`;
		helpList += `${deactivate.helpString}\n`;
		helpList += `${help.helpString}\n`;
		msg.channel.send(`\`\`\`${helpList}\`\`\``);
	}
};
