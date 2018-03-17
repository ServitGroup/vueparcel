const path = require('path')
const log = console.log

const {
  installDependencies
} = require('./utils')

module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A Vue.js project'
    },
    keywords: {
      type: 'string',
      required: true,
      message: 'keywords'
    },
    author: {
      type: 'string',
      required: true,
      message: 'Author'
    },
    license: {
      type: 'string',
      label: 'License',
      default: 'MIT'
    },
    autoInstall: {
      type: 'list',
      message: 'Should we run `npm install` for you after the project has been created? (recommended)',
      choices: [
        {
          name: 'Yes, use NPM',
          value: 'npm',
          short: 'npm'
        },
        {
          name: 'Yes, use Yarn',
          value: 'yarn',
          short: 'yarn'
        },
        {
          name: 'No, I will handle that myself',
          value: false,
          short: 'no'
        }
      ]
    }
  },
  complete: function (data, { chalk }) {
    const green = chalk.green
    const red = chalk.red
    const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)
    if (data.autoInstall) {
      installDependencies(cwd, data.autoInstall, green)
        .catch(e => {
          log(red('Error:'), e)
        })
    } else {
      log(red('Fail'))
    }
  }
}
