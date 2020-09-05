# weblog-svc

---

## Steps for creating Node server with typsescript.

- Go to specific folder and run
  `npm init`
  This will create package.json file where we can configure our project setup like entry point,git,scripts,etc.

- Install typescript as dev dependency so that we can get access of command tsc which compile our .ts file to .js file
  `npm i typescript -D`
  ` tsc server.ts` it will create server.js file.

- For type safety and auto-completion we need to install
  ` @types/node`

- Create tsconfig.json file using this command
  `npx tsc --init`
  This is the file where we define typescript compiler options.
  There will be various settings. configure accordingly.

### Now Add script for comipling and running the code.

- Install tsc-watch to detect anty changes and reload the server.
  `npm i tsc-watch -D`
  Install nodemon globally `npm i nodemon -g`.
- In package.json folder inside script write

```
"start:dev":"tsc-watch  --project . --onSuccess \"npm run nodemon\"",
"nodemon": "nodemon ./dist/index.js",
```

### Setup lint TSLint

`npm i -D tslint` `npm i -g tslint`

- Add tslint.json file using `tslint --init`.

```
"lint": "tslint --project tsconfig.json",
"lint:fix": "npm run lint -- --fix",
```

- Add Rules Accordingly in tslint.json file.
