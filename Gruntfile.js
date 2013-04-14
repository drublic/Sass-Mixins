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
		}
	});

	// Load some stuff
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');

	// Default task
	grunt.registerTask('default', ['concat', 'sass']);

};
