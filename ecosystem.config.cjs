module.exports = {
	apps: [
		{
			name: "discord-bot-template",
			script: "lib/index.js",

			watch: false,
			autorestart: true,

			cwd: ".",
			out_file: "./logs/out.log",
			error_file: "./logs/error.log",
			merge_logs: true,
			log_date_format: "YYYY-MM-DD HH:mm:ss Z",

			env: {
				NODE_ENV: "production",
			},
		},
	],
};
