module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            },
            jekyllServe: {
                command: 'jekyll serve --baseurl ""'
            }
        },
        watch: {
            scripts: {
                files: ['_sass/*.scss', 'js/*.js'],
                tasks: 'default'
            } 
        },
        sass: {
            options: {
                sourceMap: true,
                relativeAssets: false,
                outputStyle: 'expand',
                sassDir: '_sass',
                cssDir: 'css'
            },
            build: {
                files: [{
                    expand: true,
                    cwd: '_sass/',
                    src: ['**/*.{scss,sass}'],
                    dest: 'css/src',
                    ext: '.css'
                }]
            }
        },
        concat: {
            dist: {
                files: {
                    'js/catalyst.js' : ['js/src/flickity.pkgd.min.js', 'js/src/site.js'],
                    'css/catalyst.css' : ['css/src/flickity.css', 'css/src/main.css'],
                }
            },
        },
        autoprefixer: {
            options: {
              browsers: ['last 5 versions']
            },
            dist: {
                files: {
                    'css/catalyst.css': 'css/catalyst.css'
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: 'catalyst.css',
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            my_target: {
                files: {
                    'js/catalyst.min.js': ['js/catalyst.js']
                }
            }
        },
        concurrent: {
            serve: [
                'sass',
                'watch',
                'shell:jekyllServe'
            ],
            options: {
                logConcurrentOutput: true
            }
        }
    });

    // Task Commands
    grunt.registerTask('serve', [
        'concurrent:serve'
    ]);

    // Register the grunt build task
    grunt.registerTask('build', [
        'shell:jekyllBuild',
        'sass',
        'concat',
        'autoprefixer',
        'cssmin',
        'uglify'
    ]);

    // Register build as the default task fallback
    grunt.registerTask('default', 'build');

};