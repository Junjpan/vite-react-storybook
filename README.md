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
