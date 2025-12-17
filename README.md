# Demo Package <br /> How to Make and Publish a NPM Package <br /> With Typescript.

In this mini project, we will learn how to make and publish a NPM package with Typescript, step by step. We will discuss from the very basics to publishing your NPM package locally for testing. In this note, we will discuss the following topics:

1. Project Preparation
2. Setting up Typescript
3. Setting up Git
4. Building Typescript Package
5. Publishing Package Locally for Testing
6. Publishing Package to NPM Registry

## 📄 Project Preparation

In this section we will learn how to initialize a Node project.

### Initialize Node Project

Run the following command, this will create a `package.json` file

``` bash
npm init
```

## 📄 Setting up Typescript

In this section we will learn how to set up Typescript in your project

### Install Typescript

after creating the `package.json` file, run the following command

``` bash
npm install --save-dev typescript ts-node
```

or

``` bash
npm install -D typescript ts-node
```

### Setup tsconfig.json

Run the following command

``` bash
npx tsc --init
```

the command will create a `tsconfig.json` file in the base of your project. Update the outDir field to `"/.dist"`

### Create src directory

Create a `src` directory in your project and create a `index.ts` file in it. This is the main file of your package. In this section we will make a package to make simple calculations.

Add the following code to your `index.ts` file

``` typescript
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  return a / b;
}

console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));
```

### Test Function

Run the following command

``` bash
npx ts-node src/index
```

The result should show the following output

```
15
5
50
2
```

after make sure that the code is working, we can remove the `console.log` statements, and move to the next step.

## 📄 Setting up Git

In this section we will learn how to set up Git in your project. Git is a distributed version control system that allows you to track changes to your code and collaborate with other developers. To set up Git in your project, you need to initialize a Git repository. To do this, you need to run the following command

``` bash
git init
```

After initializing the Git repository, you need to create a `.gitignore` file. This file is used to specify which files should be ignored by Git. After creating the `.gitignore` file, you can add the following line to it

``` bash
/node_modules

# Ignore test-related files
/coverage.data
/coverage/

# Build files
/dist
```

## 📄 Building Typescript Package

This section will show you how to build your Typescript package, for user who want to use our package. There are various build tools that can help with this process, such as:

- tsup
- babel
- webpack
- rollup
- and so on.

In this section we will use tsup.

## 📄 Setting up Tsup

In this section we will learn how to set up tsup in your project, to do this, run the following command

``` bash
npm install --save-dev tsup
```

or

``` bash
npm install -D tsup
```

After installing tsup, create `tsup.config.ts` and configure it as follows

``` typescript
import { defineConfig } from "tsup";

export default defineConfig({
  entry     : ["src/index.ts"],
  format    : ["cjs", "esm"], // Build for commonJS and ESmodules
  dts       : true, // Generate declaration file (.d.ts)
  splitting : false,
  sourcemap : true,
  clean     : true,
});
```

Then, update `"script"` in your `package.json` file as follows

``` json
"scripts": {
  "build" : "tsup",
  "test"  : "echo \"Error: no test specified\" && exit 1"
},
```

Then, Update the `"main"` in your package.json and add the following:

``` json
"main": "./dist/index.js",
"module": "./dist/index.mjs",
"types": "./dist/index.d.ts",
"files": [
  "dist"
],
```

Now we can build our package by running the following command

``` bash
npm run build
```

Until here our package is ready to be published.

## 📄 Testing your NPM package

In this section we will learn how to test your NPM package. Testing your NPM package is important because it allows you to catch bugs early in the development process. To test your NPM package, we will use Jest.

### Install Jest

Run the following command to install Jest and its dependencies in your project

``` bash
npm install --save-dev jest ts-jest @types/jest
```

or

``` bash
npm install -D jest ts-jest @types/jest
```

### Configure Jest

After installing Jest, create a `jest.config.js` file in your project, and add the following code

``` javascript
module.exports = {
  preset          : "ts-jest",
  testEnvironment : "node",
};
```

Then, update your package.json file with the following scripts

``` json
"scripts": {
  "build": "tsup",
  "test": "jest"
},
```

To test your NPM package, run the following command

``` bash
npm run test
```

## 📄 Publishing Package Locally for Testing

Before publishing your package to the NPM registry, it’s essential to first publish and test it locally. This helps verify that the package works correctly, functions as expected, and integrates smoothly with other modules or dependencies. Testing locally enables you to identify and fix potential issues early, allowing you to make improvements before making the package publicly available.

### Use Package To Test

Execute the following command from the root directory of your package.

``` bash
npm link
```

Than, set up another test project and locally link the npm package to it. Run the following command

``` bash
npm link demo-package
```

🟡 *Note: "demo-package" is the name of our package in this demo, you can replace it with the name of your package.*

After linking the package, you can use it in your test project.

## 📄 Publishing Package to NPM Registry

Before publishing, make sure that you have a [NPM](https://www.npmjs.com/) account, and login in our local machine. To login in our local machine, run the following command

``` bash
npm login
```

we need username, password, email, and OTP to login in our local machine. After we login in our local machine, we can publish our package to NPM registry. To publish our package to NPM registry, run the following command

``` bash
npm publish
```

## 🖇 Reference

- _https://pauloe-me.medium.com/typescript-npm-package-publishing-a-beginners-guide-40b95908e69c_