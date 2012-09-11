/*globals module */
module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: '<json:package.json>',
		meta: {
			banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %> */'
		},

		concat: {
			build: {
				src: ['*.scss'],
				dest: 'build/mixins.scss'
			}
		},

		rubysass: {
			css: {
				options: {
					unixNewlines: true,
					style: 'expanded'
				},
				files: {
					'tests/css/main.css': 'tests/scss/main.scss'
				}
			}
		},

		watch: {
			concat: {
				files: ['*.scss'],
				tasks: 'concat'
			},

			css: {
				files: ['tests/scss/**/*.scss'],
				tasks: 'rubysass'
			}
		}
	});

	// Load some stuff
	grunt.loadNpmTasks('grunt-sass');

	// Default task
	grunt.registerTask('default', 'concat rubysass:css');

};
