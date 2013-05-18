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
				src: ['partials/*.scss'],
				dest: 'mixins.scss'
			}
		},

		sass: {
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

		release: {
			options: {
				file: 'package.json',
				push: false,
				npm: false,
				tagName: 'v<%= version %>',
				commitMessage: 'Release for <%= version %>'
			}
		}
	});

	// Load some stuff
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-release');

	// Default task
	grunt.registerTask('default', ['concat', 'sass']);

};
