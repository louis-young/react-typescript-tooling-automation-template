# React TypeScript Tooling Automation Template

![Continuous Integration](https://github.com/louis-young/react-typescript-tooling-automation-template/actions/workflows/ci.yml/badge.svg)
![Continuous Deployment](https://github.com/louis-young/react-typescript-tooling-automation-template/actions/workflows/cd.yml/badge.svg)

A React template with TypeScript and developer tooling.

- React with TypeScript with strong types and static code analysis to improve the developer experience and shorten feedback loops.
- Tailwind to increase styling velocity in a way that scales.
- Unit and integration tests with coverage reports and configurable thresholds via Jest to prevent regressions and increase confidence, with React Testing Library to safeguard against testing implementation details.
- Automated integration tests via Cypress to prevent regressions and increase confidence, with Cypress Testing Library to safeguard against testing implementation details.
- Linting for JavaScript and TypeScript files via ESLint to find and fix problems quickly, with static code analysis and configurable rules.
- Linting for the filesystem via LSLint to enforce consistency in file and folder names, with configurable rules.
- Opinionated formatting for an array of file types via Prettier to enforce consistency in code style, with configurable rules.
- Pre-commit hooks via Husky to automatically enforce standards and shorten feedback loops, with configurable steps.
- Continuous Integration via GitHub actions with type checking, formatting, linting, testing and more, with configurable steps.
- Continuous Deployment via GitHub actions to Amazon S3, in my instance to an S3 bucket behind a CloudFront distribution through Route 53.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
