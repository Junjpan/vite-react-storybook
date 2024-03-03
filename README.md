# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

install vite-react run

```
npx create-vite your-project-name --template react
cd your-project-name
npm install && npm run dev
```

run the app

```
npm run dev
```

install storybook
`npx sb init`

if you want the storybook recongize jsx, you have to run
` npm i --save-dev storybook-addon-jsx`
and add `'storybook-addon-jsx'` to `.storybook/main.js` the addons property

run storybook locally

```
npm run storybook
```

Under .storybook folder, there is preview.js file which allows you to do a global configuration.

deploy storybook in Chromatic,

```
npm run build-storybook

npm run chromatic

```

`npm run build-storybook` will create a storybook-static folder.

sign in to the chromatic, connect to your Github, and select your storybook project. after connecting to your project, it’ll provide you with the chromatic script that you can build your storybook inside the Chromatic, the script like `npm run  chromatic --project-token=<project-token>`, after you run this command, will create a storybook inside the chromatic, and it also provides you a link https://random-uuid.chromatic.com to your published Storybook. Share the link with your team to get feedback

This repo use CI service [Github Actions] to deploy our Storybook automatically. You can see the Github action under the action tab, you can also find the storybook deploy link from there as well.

Once you set up the CI service, you don't need to run `npm run build-storybook` and `npm run chromatic` everytime to see the changes in chromatic. once you make a push, it automatically trigger the github action and create a new storybook build and update to the chromatic. Each build will generate a different url for the storybook.
