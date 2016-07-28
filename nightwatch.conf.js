var seleniumServer = require('selenium-server')
var phantomjs = require('phantomjs-prebuilt')
var chromedriver = require('chromedriver')
var nightwatchCucumber = require('nightwatch-cucumber')

var nightwatchCucumberConf = {
    runner: 'nightwatch',
    featureFiles: 'test/e2e',
    stepDefinitions: 'test/e2e',
    closeSession: 'afterFeature'
}

module.exports = {
    src_folders: [nightwatchCucumber(nightwatchCucumberConf)],
    custom_commands_path: '',
    custom_assertions_path: '',
    page_objects_path: '',
    live_output: false,
    disable_colors: false,
    // test_workers: {
    //  enabled: true,
    //  workers: 'auto'
    // },

    selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        host: '127.0.0.1',
        port: 4444
    },

    test_settings: {
        default: {
            launch_url: 'http://localhost',
            selenium_port: 4444,
            selenium_host: 'localhost',
            silent: true,
            desiredCapabilities: {
                browserName: 'phantomjs',
                javascriptEnabled: true,
                acceptSslCerts: true,
                'phantomjs.binary.path': phantomjs.path
            }
        },

        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true
            },
            selenium: {
                cli_args: {
                    'webdriver.chrome.driver': chromedriver.path
                }
            }
        },

        firefox: {
            desiredCapabilities: {
                browserName: 'firefox',
                javascriptEnabled: true,
                acceptSslCerts: true
            }
        }
    }
}