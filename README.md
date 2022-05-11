# Quay UI

UI for Quay based on React and Patternfly framework 

## Installation

It is assumed that you have a Quay instance running that you can point the UI to.
Run the following commands to get started

```bash
git clone https://github.com/quay/quay-ui.git
cd quay-ui
npm install
```

## Development

Start the dev server by running

```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

In order for you to use this with a Quay backend, you need to configure CORS on the Quay side.
Add the following to your `config.yaml` in Quay

```yaml
CORS_CONFIG:
  origin: "http://localhost:9000"
  credentials: True
  headers: ["Authorization", "Content-Type", "X-Requested-With", "X-CSRF-Token", "Cookie"]
```

If you are using `docker-compose` for local development, you can add this to `local-dev/stack/config.yaml` 
in the Quay repo.

## Testing

```bash
npm test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Building for Production

```bash
npm run build
```

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
