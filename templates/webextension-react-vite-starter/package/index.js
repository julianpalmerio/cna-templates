const dependencies = require("./dependencies");
const devDependencies = require("./devDependencies");

module.exports = function resolvePackage(setup, { appName, runCommand }) {
  const packageJson = {
    name: appName,
    version: "0.1.0",
    description: "A web extension starter template",
    private: true,
    engines: {
      node: ">=18.15",
    },
    browserslist: {
      production: [">0.2%", "not dead", "not op_mini all"],
      development: [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version",
      ],
    },
    scripts: {
      "prepare:git-hooks": "is-ci || husky install",
      build: "tsc && vite build",
      "build:watch": "vite build --watch",
      wss: "ts-node .webext-config/reload/initReloadServer.ts",
      dev: "(run-p wss build:watch)",
      start: `${runCommand} dev`,
      preview: "vite preview",
      format:
        'prettier --write "**/*.{js,jsx,ts,tsx,json,css,sass,scss,less,html,md,yml,yaml}"',
      lint: "eslint .",
      "lint:fix": "eslint . --fix",
      "web-ext:chromium":
        "web-ext run --source-dir ./dist --target=chromium",
      "web-ext:firefox":
        "web-ext run --source-dir ./dist --target=firefox-desktop",
      "lint-staged": "lint-staged",
      typecheck: "tsc --noEmit",
    },
  };

  return { ...packageJson, dependencies, devDependencies };
};
