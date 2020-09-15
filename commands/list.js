const Course = require('../models').Course;

module.exports = {
	description: 'LIST FIX ME',
	usage: 'LIST FIX ME',
	name: 'list',
	handle: message => {
			Course.find({}, (error, courses) => {
				if(error) throw error;
				let courseList = [];
				courses.forEach(course => {
					courseList.push(`${course.active ? '+' : '-'} [${course.acronym}] ${course.name}`);
				});
				let msg = '```diff\n';
				for(let i = 0; i < courseList.length; i++)
					msg += '\n' + courseList[i];
				msg += '```';
				message.channel.send(msg);
			});
		}
};
