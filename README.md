# ng-iso-constants

## Build

This project hasn't been updated for a long time, so I'm not sure which version of NodeJS has to be used, but the next process works good for me on macOS:

- Install NodeJS version `6.17.1` and npm version `3.10.10`. I use Node Version Manager [NVM](https://github.com/nvm-sh/nvm):

  ```bash
  nvm install 6
  ```

- Install npm dependencies:

  ```
  npm i
  ```

- Run building process

  ```
  ./node_modules/.bin/gulp build
  ```