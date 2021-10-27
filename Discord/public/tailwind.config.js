module.exports = {
	mode: "jit",
	purge: ["./**/*.js", "../**/*.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				tertiary: "#202225",
				defaultBlue: "#5865f2",
				primary: "#36393f",
				secondary: {
					DEFAULT: "#2f3136",
					alt: "#292b2f",
					header: "#b9bbbe",
				},
				normal: "#dcddde",
				muted: "#72767d",
				channeltextarea: "#40444b",
			},
			fontFamily: {
				primary: 'Whitney,"Helvetica Neue",Helvetica,Arial,sans-serif',
				display: 'Ginto,"Helvetica Neue",Helvetica,Arial,sans-serif',
			},
			borderRadius: {
				full: "50%",
			},
			zIndex: {
				1: 1,
				100: 100,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
