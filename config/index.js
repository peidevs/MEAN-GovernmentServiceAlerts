var config = {
	local : {
		mode: 'local',
		port: 8885
	},
	cloud9 : {
		mode: 'cloud9',
		port: process.env.PORT
	}
};

module.exports = function(mode) {
	return config[mode || process.argv[2] || 'local'] || config.local;
};
