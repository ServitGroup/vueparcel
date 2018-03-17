const fs = require('fs-extra')
const spawn = require('child_process').spawn
const log = console.log

/**
 * Runs `npm install` in the project directory
 * @param {string} cwd Path of the created project directory
 * @param {object} data Data from questionnaire
 */
exports.installDependencies = function installDependencies (
  cwd,
  executable = 'npm',
  color
) {
  log(`
  # ${color('Installing project dependencies ...')}
  # ======================================

  `)
  return runCommand(executable, ['install'], {
    cwd
  })
}

exports.copy = function copy (src, dest) {
  try {
    fs.copySync(src, dest)
    log('success!')
  } catch (err) {
    console.error(err)
  }
}
exports.remove = function remove (dest) {
  try {
    fs.removeSync(dest)
  } catch (err) {
    console.error(err)
  }
}

/**
 * Spawns a child process and runs the specified command
 * By default, runs in the CWD and inherits stdio
 * Options are the same as node's child_process.spawn
 * @param {string} cmd
 * @param {array<string>} args
 * @param {object} options
 */
function runCommand(cmd, args, options) {
  return new Promise((resolve, reject) => {
    const spwan = spawn(
      cmd,
      args,
      Object.assign(
        {
          cwd: process.cwd(),
          stdio: 'inherit',
          shell: true,
        },
        options
      )
    )

    spwan.on('exit', () => {
      resolve()
    })
  })
}
