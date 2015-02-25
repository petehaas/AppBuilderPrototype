module.exports = function() {
    var client = './app/';
    var server = './server/';
    var clientApp = client;
    var root = './';
    var specRunnerFile = 'specs.html';

    var config = {
        root: root,
        client: client,
        server: server,
        source: 'app/',
        htmltemplates: clientApp + '/**/*.html',
        less: client + '/styles/styles.less',
        html: client + '/**/*.html',
        index:   'index.html',
        js: [
            clientApp + '/**/*.module.js',
            clientApp + '/**/*.js',
            '!' + clientApp + '/**/*.spec.js'
        ],
        specs: [clientApp + '/**/*.spec.js'],
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        plato: {
            js: clientApp + '/**/*.js'
        },
        fonts: './bower_components/font-awesome/fonts/**/*.*',
        images: './images/**/*.*',
        build: './build/',
        temp: './.tmp/',
        report: './report/',

        specHelpers: [client + '/test-helpers/*.js'],
        specRunner: './',
        specRunnerFile: specRunnerFile,
        midwaySpecs: client + '/test/midway/**/*.spec.js',
        testlibraries: [
            'node_modules/mocha/mocha.js',
            'node_modules/chai/chai.js',
            'node_modules/mocha-clean/index.js',
            'node_modules/sinon-chai/lib/sinon-chai.js'
        ],

        nodeServer: './server/server.js',
        defaultPort: '7203',
        browserReloadDelay: 1000,
        templateCache: {
            module: 'app.core',
            file: 'templates.js',
            root: 'app/'
        },
        bower: {
            directory: './bower_components/',
            ignorePath: '../..'
        },
        packages: [
            './package.json',
            './bower.json'
        ]
    };

    return config;
};
