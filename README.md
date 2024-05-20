### dart_node_example
"how to" import a dart function in node.js

### pure ts hello world

- set up node dependencies
```sh
npm init -y && \
npm install express && \
npm install --save-dev typescript @types/node @types/express ts-node-dev
```
- create the file `tsconfig.json` with the code below
```json
{
    "compilerOptions": {
      "target": "ES6",
      "module": "commonjs",
      "strict": true,
      "esModuleInterop": true,
      "skipLibCheck": true,
      "outDir": "./dist",
      "rootDir": "./src"
    },
    "include": ["src"]
  }
```
- create the file `src/index.ts` with the code below
```ts
import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello TS!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```
- update `scripts` in `package.json`
```json
"scripts": {
  "start": "ts-node-dev src/index.ts"
}
```