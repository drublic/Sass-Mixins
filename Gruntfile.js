/*globals module */
module.exports = function (grunt) {

	var banner = '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
		'<%= grunt.template.today("yyyy-mm-dd") %> */';

	// Project configuration.
	grunt.initConfig({
		pkg: require('./package'),

		concat: {
			options: {
				banner: banner
			},
			build: {
				src: ['partials/*.scss'],
				dest: 'mixins.scss',
			}
		},

		sass: {
			css: {
				options: {
					unixNewlines: true,
					style: 'expanded',
					banner: banner
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
