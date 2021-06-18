# webpack-express

install dependencies
```
  $ npm i
```
### run
```js
  $ npm run server // run dev env node
  $ npm run start // run bundle node 
  $ npm run dev // run dev webpack and node server
  $ npm run build // create production build
```

```
  "server": "node src/index.js",
  "start": "node dist/index.js",
  "dev": "webpack --mode development && node dist/index.js",
  "build": "webpack --mode production"
```