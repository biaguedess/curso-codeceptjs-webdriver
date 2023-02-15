const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

const server = require('./server/server.js')

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './steps/login_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://automationpratice.com.br',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    "I": "./steps_file.js",
    "create UserPage": "./pages/Create User.js",
    "home_page": "./pages/home_page.js",
    "login_page": "./pages/login_page.js",
    "create_user_page": "./pages/create_user_page.js"
  },
  bootstrap: async () => {
    await server.start();
  },
  teardown: async () => {
    await server.start();
  },
  name: 'automacao-codeceptjs-web',
  plugins: {
    autoLogin: {
      enabled: true,
      saveToFile: true,
      inject: 'login',
      users: {
        user: {
          // loginAdmin function is defined in `steps_file.js`
          login: (I) => {
            I.amOnPage('/')
            I.wait(10)
            I.click('Login')
            I.wait(10)
            I.fillField('#user','joao.kleber@teste.com')
            I.fillField('#password',secret('123456'))
            I.click('#btnLogin')
            I.wait(10)
          },
          // if we see `Admin` on page, we assume we are logged in
          check: (I) => {
             I.amOnPage('/');
             I.see('joao.kleber@teste.com');
          }
        }
      }
    },
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false,
      fullPageScreenshots: true,
      screenshotsForAllureReport: true
    },
    mocha: {
      reporterOptions: {
          reportDir: "output"
      }
    },
    allure: {
      enabled: true
    }
  }
}