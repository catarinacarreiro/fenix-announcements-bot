const Course = require('../models').Course;

module.exports = {
	description: 'desativa os anúncios da uc',
	usage: 'código-uc',
	name: 'desativar',
	handle: message => {
		let args = message.content.split(' ').slice(1);
    if(args.length == 0)
      return module.exports.showHelp(message);
		if(args.length > 1){
			return module.exports.showHelp(message);
		} else {
			Course.findOne({acronym: args[0]}, (error, course) => {
				if(error) throw error;
				if(!course)
					return message.channel.send(`Disciplina [${course.acronym}] ${course.name} não encontrada.`);
        if(!course.active)
          return message.channel.send(`Disciplina [${course.acronym}] ${course.name} já estava desativada.`);
				else {
          course.active = false;
          message.channel.send(`[${course.acronym}] ${course.name} desativada com sucesso.`);
          course.save();
        }
			});
		}
	}
};
