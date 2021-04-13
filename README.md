# Webpack Practise 

This is a practise repositorie to master my skills on webpack and
there isn't better way to learning something if you do note practise.

## Getting Started 

### Topics

- Basic Setups

Install the webpack e webpack-cli (the tool used to run webpack on the command line)

```
npm install webpack webpack-cli --save-dev

```
  
- Creating Bundle

Use this command if you already have a package.json in the folder

```
npx webpack
```
- Modules

For use webpack in yout files you need to use ``import`` and ``export`` stataments  

- Using a Configuration

You can use a custom configuration to creating a bundle : 

```
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

```

- ``entry`` - the main file for the project
- ``ouput`` - the options for the ouput bundle
- ``ouput->filename`` - the ouput filename of the bundle
- ``ouput->path`` - the path where the bundle will be generated


- NPM Scripts


You can put in your package.json file the alias to generated a bundle from webpack

```

{
   "name": "webpack-demo",
   "version": "1.0.0",
   "description": "",
   "private": true,
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1",
 ->  "build": "webpack"
   },
   "keywords": [],
   "author": "",
   "license": "ISC",
   "devDependencies": {
     "webpack": "^5.4.0",
     "webpack-cli": "^4.2.0"
   },
   "dependencies": {
     "lodash": "^4.17.20"
   }
 }

```
