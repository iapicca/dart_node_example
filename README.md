### dart_node_example
"how to" import a dart function in node.js

### js/ts example

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
      "allowJs": true,
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

- create the file `src/greeting.js with the following code
```js
export function greeting() {
    return "Hello from JS"
}
```
- create the file `src/index.ts` with the code below
```ts
import express, { Request, Response } from 'express';
import { greeting } from './greeting.js';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send(greeting());
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

#

### notes
see issue
- https://github.com/dart-lang/webdev/issues/2432

### Example

Simply run `npm start` and you can then access http://localhost:3000
