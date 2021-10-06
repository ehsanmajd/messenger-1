const { exec, spawnSync } = require('child_process');
const { promisify } = require('util');
const { EOL } = require('os')

const MASTER_BRANCH = 'master';

const removeEOL = phrase => {
  const index = phrase.indexOf(EOL);
  if (index !== -1) {
    return phrase.substring(0, index);
  }
  return phrase;
}

const getBranchNameCommand = 'git rev-parse --abbrev-ref HEAD';
const checkForUncommittedChanges = 'git status -suno';
const pushCommand = 'git push origin head';

(
  async () => {
    const VALID_ARGS = ['--major', '--minor', '--patch'];
    const [, , version] = process.argv;
    if (!version) {
      console.error('Specify the release version type. "--major", "--minor", "--patch"');
      process.exit(2);
    }

    if (VALID_ARGS.indexOf(version) === -1) {
      console.error(`Only ${VALID_ARGS.join(' ')} are valid as a switch.`);
      process.exit(2);
    }

    let branchName = '';
    let uncommittedChangesAvailable = false;
    try {
      branchName = removeEOL((await promisify(exec)(getBranchNameCommand)).stdout);
      console.info(`selected git branch is '${branchName}' .`);
    }
    catch {
      console.error('Unable to obtain current git branch name.');
      process.exit(1);
    }

    try {
      const output = (await promisify(exec)(checkForUncommittedChanges)).stdout;
      uncommittedChangesAvailable = removeEOL(output) !== '';
      if (uncommittedChangesAvailable) {
        console.error(`
          Some uncommitted changes were found. The operation canceled.
        `);
      }
    }
    catch {
      console.error('Unable to obtain git status.');
      process.exit(1);
    }

    if (branchName !== MASTER_BRANCH) {
      console.error(`
          It is not possible to perform this action on ${branchName}.
          run 'git switch ${MASTER_BRANCH}' first.
        `);
      process.exit(2);
    }

    const { status: exitCode } = spawnSync('yarn', ['version', version],
      {
        cwd: process.cwd(),
        env: process.env,
        stdio: [process.stdin, process.stdout, process.stderr],
        encoding: 'utf-8'
      });

    if (exitCode === 0) {
      console.info('Git tag is successfully created.');
      console.info('Trying to push the changes.')
      try {
        const output = (await promisify(exec)(pushCommand)).stdout;
        console.info(output);
      }
      catch {
        console.error('Unable to push the changes.');
        process.exit(1);
      }
    }

    // process.exit(0); // Everything is fine :)
  }
)();