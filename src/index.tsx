import * as React from 'react';
import * as ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {RecoilRoot} from 'recoil';
import {FlagProvider} from '@unleash/proxy-client-react';

import '@patternfly/react-core/dist/styles/base.css';
import '@patternfly/patternfly/patternfly-addons.css';

// Load App after patternfly so custom CSS that overrides patternfly doesn't require !important
import App from './App';

// Configure Unleash
const config = {
  url: 'http://localhost:3000/proxy',
  clientKey: 'proxy-client-key',
  refreshInterval: 2,
  appName: 'quay',
  environment: 'default',
};

ReactDOM.render(
  <React.StrictMode>
    <FlagProvider config={config}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </FlagProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
