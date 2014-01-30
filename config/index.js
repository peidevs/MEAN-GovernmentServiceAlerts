var config = {
	local : {
		mode: 'local',
		port: 8885,
		mongo: {
			host: '127.0.0.1',
			port: 27017
		}
	},
	cloud9 : {
		mode: 'cloud9',
		port: process.env.PORT,
		mongo: {
			host: '127.0.0.1',
			port: 10046
		}
	},
	remoteDB : {
		mode: 'remoteDB',
		port: 8885,
		mongo: {
			host: 'troup.mongohq.com',
			port: 10046 ,
			user: 'scott',
			pass: 'tiger'
		}
	}
};

module.exports = function(mode) {
	return config[mode || process.argv[2] || 'local'] || config.local;
};

